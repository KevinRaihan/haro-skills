---
name: safety-critical-coding
description: Apply NASA Power of 10 coding standards for writing reliable, maintainable, and verifiable code in production systems. Use when writing critical code (financial, medical, aerospace), refactoring for reliability, or when the user requests "strict" or "NASA" standards. Includes rules for avoiding recursion, bounded loops, memory management, function length limits, assertions, and error handling.
---

# Safety-Critical Coding

## Purpose

This skill provides NASA Power of 10 inspired coding standards for writing reliable, maintainable, and verifiable code.

## When to Use

- Writing production code for critical systems (financial, medical, aerospace)
- Refactoring legacy code for reliability
- Implementing features where bugs have high cost
- When the user explicitly requests "strict" or "NASA" standards
- Building systems requiring formal verification

## When to Relax

- Quick prototypes or proofs of concept
- Internal scripts or one-off tools
- UI components (unless safety-critical)
- When user explicitly requests "prototype mode"
- Early exploratory development

---

## The 10 Core Rules

### Rule 1: Avoid Complex Flow Constructs
**Standard:** No goto statements, no recursion

**Rationale:** Simplifies control flow analysis and prevents unbounded stack growth.

**Python Example:**
```python
# ❌ BAD - Recursion with potential stack overflow
def calculate_factorial(n: int) -> int:
    if n <= 1:
        return 1
    return n * calculate_factorial(n - 1)

# ✅ GOOD - Iterative with bounds checking
def calculate_factorial(n: int) -> int:
    """
    Calculate factorial iteratively with safety checks.
    
    NASA Rule Compliance:
    - Rule 1: No recursion (iterative approach)
    - Rule 5: 3 assertions for validation
    """
    assert isinstance(n, int), "n must be an integer"
    assert 0 <= n <= 20, "n must be 0-20 to prevent overflow"
    
    result = 1
    for i in range(2, n + 1):
        result *= i
    
    assert result > 0, "Result must be positive"
    return result
```

---

### Rule 2: All Loops Must Have Fixed Bounds
**Standard:** Every loop must have a provable upper bound on iterations

**Rationale:** Prevents infinite loops and enables verification of worst-case execution time.

```python
# ❌ BAD - Unbounded loop
def process_queue(queue):
    while not queue.empty():
        item = queue.get()
        process(item)

# ✅ GOOD - Bounded with safety limit
def process_queue(queue, max_items: int = 10000) -> int:
    """
    Process queue items with safety limit.
    
    NASA Rule Compliance:
    - Rule 2: Loop bounded by max_items
    - Rule 5: 2 assertions for validation
    - Rule 7: Returns count for verification
    """
    assert max_items > 0, "max_items must be positive"
    assert hasattr(queue, 'empty'), "queue must have empty() method"
    
    processed = 0
    for _ in range(max_items):
        if queue.empty():
            break
        
        item = queue.get()
        process(item)
        processed += 1
    
    if not queue.empty():
        logger.warning(f"Queue processing stopped at limit: {max_items}")
    
    assert 0 <= processed <= max_items, "Processed count out of range"
    return processed
```

---

### Rule 3: No Dynamic Memory Allocation After Init
**Standard:** All dynamic allocation happens during initialization phase

**Rationale:** Prevents memory leaks, fragmentation, and unpredictable allocation failures.

**Python Adaptation:**
Python has garbage collection, so we focus on pre-allocation and resource limits.

```python
# ❌ BAD - Unbounded growth
class DataProcessor:
    def __init__(self):
        self.buffer = []
    
    def add_data(self, data):
        self.buffer.append(data)  # Can grow without limit

# ✅ GOOD - Fixed size buffer with overflow handling
class DataProcessor:
    """
    Process data with fixed-size buffer.
    
    NASA Rule Compliance:
    - Rule 3: Pre-allocated buffer, no unbounded growth
    - Rule 5: Assertions in __init__ and add_data
    """
    
    def __init__(self, buffer_size: int = 1000):
        assert 1 <= buffer_size <= 100000, \
            f"Buffer size {buffer_size} out of range (1-100000)"
        
        self.buffer_size = buffer_size
        self.buffer: list = []
        self.overflow_count = 0
    
    def add_data(self, data) -> bool:
        """Add data to buffer. Returns False if buffer is full."""
        assert data is not None, "Data cannot be None"
        
        if len(self.buffer) >= self.buffer_size:
            self.overflow_count += 1
            logger.warning(f"Buffer overflow, item dropped (total: {self.overflow_count})")
            return False
        
        self.buffer.append(data)
        assert len(self.buffer) <= self.buffer_size, "Buffer size exceeded"
        return True
```

---

### Rule 4: Functions ≤ 60 Lines
**Standard:** Functions should fit on one printed page (≤60 lines)

**Rationale:** Each function should be a single logical unit that is understandable and verifiable.

```python
# ❌ BAD - Function too long (80+ lines)
def process_user_registration(data):
    # Validation (20 lines)
    # Database operations (25 lines)
    # Email sending (15 lines)
    # Logging (10 lines)
    # Audit trail (15 lines)
    # ... 85 lines total

# ✅ GOOD - Small, focused functions
def process_user_registration(data: dict) -> tuple[bool, str]:
    """
    Main coordinator for user registration (18 lines).
    
    NASA Rule Compliance:
    - Rule 4: 18 lines (well under 60)
    - Rule 5: 3 assertions for validation
    """
    assert isinstance(data, dict), "data must be dictionary"
    assert 'email' in data, "email is required"
    assert 'username' in data, "username is required"
    
    # Delegate to focused functions
    if not validate_registration_data(data):
        return False, "Validation failed"
    
    user_ok, err = create_user_account(data)
    if not user_ok:
        return False, f"Account creation: {err}"
    
    send_welcome_email(data['email'])
    log_registration(data['username'])
    
    return True, "Registration successful"
```

---

### Rule 5: Minimum 2 Assertions Per Function
**Standard:** Use assertions to verify preconditions and postconditions

**Rationale:** Catches bugs early and documents assumptions.

```python
# ❌ BAD - No assertions
def divide(x, y):
    return x / y

# ✅ GOOD - With assertions
def divide(x: float, y: float) -> float:
    """
    Divide with safety checks.
    
    NASA Rule Compliance:
    - Rule 5: 4 assertions (exceeds minimum of 2)
    """
    # Preconditions
    assert isinstance(x, (int, float)), "x must be numeric"
    assert isinstance(y, (int, float)), "y must be numeric"
    assert y != 0, "Division by zero not allowed"
    
    result = x / y
    
    # Postcondition
    assert isinstance(result, float), "Result must be float"
    
    return result
```

---

### Rule 6: Restrict Data to Smallest Possible Scope
**Standard:** Declare all data objects at the smallest possible level of scope

**Rationale:** Reduces namespace pollution and makes code easier to analyze.

```python
# ❌ BAD - Wide scope
user_data = None
temp_result = 0

def process():
    global user_data, temp_result
    # Use globals

# ✅ GOOD - Minimal scope
def process(user_id: int) -> tuple[bool, str]:
    """Process with minimal variable scope."""
    # Data declared where needed
    user_data = fetch_user(user_id)
    
    if not user_data:
        return False, "User not found"
    
    # temp_result only exists in this block
    temp_result = calculate_score(user_data)
    
    return True, f"Score: {temp_result}"
```

---

### Rule 7: Check Return Values
**Standard:** The return value of all non-void functions must be checked

**Rationale:** Prevents silent failures and error propagation.

```python
# ❌ BAD - Unchecked return values
def save_config(config):
    write_to_file(config)  # Ignores return
    update_database(config)  # Ignores return

# ✅ GOOD - All returns checked
def save_config(config: dict) -> tuple[bool, str]:
    """
    Save configuration with error handling.
    
    NASA Rule Compliance:
    - Rule 7: All return values checked
    """
    assert isinstance(config, dict), "config must be dict"
    
    file_ok, file_err = write_to_file(config)
    if not file_ok:
        logger.error(f"File write failed: {file_err}")
        return False, f"File error: {file_err}"
    
    db_ok, db_err = update_database(config)
    if not db_ok:
        logger.error(f"DB update failed: {db_err}")
        delete_config_file()  # Rollback
        return False, f"Database error: {db_err}"
    
    return True, ""
```

---

### Rule 8: Limited Use of Preprocessor
**Standard:** Use of the preprocessor must be limited to include files and simple macros

**Python:** Not applicable (Python has no preprocessor)

---

### Rule 9: Restrict Pointer Use
**Standard:** Limit pointer use to a single dereference, and do not use function pointers

**Python:** Not directly applicable (Python doesn't have pointers in the C sense)

---

### Rule 10: Compile With All Warnings On
**Standard:** All code must be compiled with all possible warnings enabled

**Python Equivalent:** Use strict linters and type checkers

```bash
# Python - Comprehensive checking
pylint src/ \
    --max-line-length=88 \
    --max-function-lines=60 \
    --max-complexity=10 \
    --fail-under=9.0

# Type checking
mypy src/ \
    --strict \
    --warn-unreachable \
    --warn-redundant-casts

# Security scanning
bandit -r src/ \
    --severity-level medium \
    --confidence-level medium
```

---

## Integration Workflow

### Before Writing Code
1. Review relevant NASA rules
2. Plan function boundaries (<60 lines)
3. Identify assertions needed

### While Coding
1. Apply checklist for each function
2. Add assertions as you write
3. Keep complexity low

### Before Committing
1. Self-review with this skill
2. Run local checks
3. Verify linter passes

### During Code Review
1. Reviewer verifies NASA rule compliance
2. Check for missing assertions
3. Validate error handling

---

## Common Patterns

### Pattern 1: Refactoring Long Functions

```python
# BEFORE: 85 lines, too complex
def process_order(order_data):
    # Validation (20 lines)
    # Inventory check (15 lines)
    # Payment processing (25 lines)
    # Shipping calculation (15 lines)
    # Email notification (10 lines)
    pass

# AFTER: Decomposed into focused functions
def process_order(order_data: dict) -> tuple[bool, str]:
    """Main coordinator (18 lines)."""
    assert isinstance(order_data, dict), "order_data must be dict"
    
    if not validate_order(order_data):
        return False, "Validation failed"
    
    available, err = check_inventory(order_data['items'])
    if not available:
        return False, f"Inventory: {err}"
    
    payment_ok, err = process_payment(order_data['payment'])
    if not payment_ok:
        return False, f"Payment: {err}"
    
    schedule_shipping(order_data)
    send_confirmation_email(order_data['email'])
    
    return True, "Order processed"
```

---

## Summary

These rules create code that is:
- **Verifiable**: Can be formally analyzed
- **Predictable**: Behavior is deterministic
- **Maintainable**: Easy to understand and modify
- **Reliable**: Bugs are caught early
- **Safe**: Critical systems can depend on it

**Remember:** Perfect is the enemy of good. Apply rules proportionally to system criticality. A banking transaction deserves NASA-level rigor; an internal dashboard doesn't.
