---
name: code-review-standards
description: Comprehensive code review process that enforces quality, safety, and maintainability standards. Use when reviewing pull requests, self-reviewing code before committing, providing feedback on user-submitted code, conducting design reviews, or auditing code for quality improvements. Integrates NASA Power of 10 rules with industry best practices including SOLID principles, security checks, and testing standards.
---

# Code Review Standards

## Purpose

Comprehensive code review process that enforces quality, safety, and maintainability standards. Integrates NASA Power of 10 rules with industry best practices.

## When to Use

- Reviewing pull requests before merge
- Self-reviewing code before committing
- Providing feedback on user-submitted code
- Conducting design reviews for new features
- Auditing existing code for quality improvements

---

## Review Process Overview

### Three-Stage Review

```
Stage 1: AUTOMATED (CI/CD)
   ↓
Stage 2: MANUAL REVIEW (This Skill)
   ↓
Stage 3: APPROVAL & MERGE
```

---

## Stage 1: Pre-Review Automated Checks

**These MUST pass before human review begins:**

```bash
Automated Checklist:
- [ ] All unit tests pass
- [ ] Integration tests pass
- [ ] Code coverage ≥ 80%
- [ ] Linters pass (pylint ≥ 8.0, flake8)
- [ ] Type checker passes (mypy --strict)
- [ ] Security scan clean (bandit, safety)
- [ ] NASA rules checker passes
- [ ] No TODO/FIXME in production code
- [ ] Commit messages follow convention
- [ ] PR description is complete
```

**If any automated check fails:** Request author fix before review.

---

## Stage 2: Manual Code Review

### 2.1 Design Review

**Architecture & Design:**

- [ ] **SOLID principles followed?**
  - Single Responsibility: Each class/module has one reason to change
  - Open/Closed: Open for extension, closed for modification
  - Liskov Substitution: Subtypes are substitutable
  - Interface Segregation: Many specific > one general
  - Dependency Inversion: Depend on abstractions

- [ ] **Is the design simple and understandable?**
  - Can a new team member understand it?
  - Is it the simplest solution that works?
  - Are there unnecessary abstractions?

- [ ] **Are there better alternatives?**
  - Is there a standard pattern that fits better?
  - Could this be simplified?
  - Is this reinventing the wheel?

- [ ] **Is this the right place for this code?**
  - Does it belong in this module?
  - Is it at the right abstraction level?
  - Does it respect module boundaries?

**API Design:**
- [ ] Is the API intuitive and self-documenting?
- [ ] Are parameter names clear and meaningful?
- [ ] Is the return type appropriate?
- [ ] Are edge cases documented and handled?
- [ ] Is the API backwards compatible (if needed)?

---

### 2.2 Safety & Correctness Review

**NASA Power of 10 Compliance:**

Check each function against:
1. **Rule 1 - No recursion**: Uses iteration instead
2. **Rule 2 - Bounded loops**: All loops have provable upper bounds
3. **Rule 3 - No unbounded allocation**: Memory limits enforced
4. **Rule 4 - ≤60 lines**: Functions are concise
5. **Rule 5 - ≥2 assertions**: Preconditions and postconditions checked
6. **Rule 6 - Minimal scope**: Variables declared at smallest scope
7. **Rule 7 - Error checking**: All return values checked
8. **Rule 10 - No warnings**: Static analysis passes

**Critical Safety Checks:**

- [ ] **Error Handling**
  - Are all error cases handled?
  - Are assertions used for preconditions?
  - Are error messages helpful and actionable?
  - Is there a graceful degradation path?
  - Are errors logged appropriately?

- [ ] **Bounds Checking**
  - Are all array/list accesses bounds-checked?
  - Are all loops provably bounded?
  - Are resource limits enforced (memory, time, connections)?
  - Can any loop run forever?
  - Are integer overflows prevented?

- [ ] **Input Validation**
  - Is all external input validated?
  - Are ranges checked (min/max values)?
  - Are types verified?
  - Are null/None cases handled?
  - Is user input sanitized?

- [ ] **Concurrency Safety** (if applicable)
  - Are shared resources properly protected?
  - Are there potential race conditions?
  - Are locks acquired in consistent order?
  - Are atomic operations used correctly?
  - Is thread-safety documented?

---

### 2.3 Quality Review

**Readability:**

- [ ] **Are names clear and descriptive?**
  - Functions: verb phrases (calculate_total, validate_input)
  - Variables: noun phrases (user_count, is_valid)
  - Constants: UPPER_SNAKE_CASE
  - No single-letter names except loop counters

- [ ] **Is the logic easy to follow?**
  - Linear flow without excessive branching?
  - Clear separation of concerns?
  - No deeply nested conditions (max 3 levels)?

- [ ] **Are complex parts commented?**
  - Why, not what
  - Algorithms explained
  - Business logic documented
  - Tricky parts justified

- [ ] **Is there dead or commented-out code?**
  - Remove unused imports
  - Remove commented code (use git history)
  - Remove unused functions/variables
  - Remove debug print statements

**Maintainability:**

- [ ] **Would I understand this in 6 months?**
  - Is intent clear?
  - Are assumptions documented?
  - Is context provided?

- [ ] **Is there code duplication (DRY violation)?**
  - Identical logic in multiple places?
  - Opportunity to extract common function?
  - Copy-paste code?

- [ ] **Are functions single-purpose?**
  - Does each function do ONE thing?
  - Can you describe it in one sentence?
  - Could it be split?

- [ ] **Is complexity reasonable?**
  - Cyclomatic complexity ≤ 10
  - Not too many parameters (≤ 5)
  - Not too many local variables (≤ 15)
  - Cognitive complexity low

**Performance:**

- [ ] **Are there obvious performance issues?**
  - Unnecessary loops?
  - Inefficient algorithms?
  - Excessive object creation?

- [ ] **Are algorithms appropriate (Big-O)?**
  - O(n²) when O(n log n) is possible?
  - O(n) search when O(1) lookup available?
  - Appropriate data structures used?

- [ ] **Are there N+1 query problems?**
  - Database queries in loops?
  - Could be batched?
  - Proper use of joins/includes?

- [ ] **Are resources cleaned up?**
  - Files closed?
  - Connections released?
  - Memory freed?
  - Context managers used?

---

### 2.4 Testing Review

**Test Coverage:**

- [ ] Are there unit tests for this code?
- [ ] Do tests cover happy paths?
- [ ] Do tests cover edge cases?
- [ ] Do tests cover error conditions?
- [ ] Are tests clear and maintainable?
- [ ] Do tests avoid testing implementation details?
- [ ] Are integration tests needed?
- [ ] Are performance tests needed?

**Test Quality Example:**

```python
# Good test example
def test_calculate_dosage_with_valid_inputs():
    """Test dosage calculation with typical values."""
    # Arrange
    weight = 70.0
    concentration = 10.0
    
    # Act
    result = calculate_dosage(weight, concentration)
    
    # Assert
    assert result == 3.5
    assert isinstance(result, float)

def test_calculate_dosage_rejects_zero_concentration():
    """Test that zero concentration is rejected."""
    with pytest.raises(AssertionError, match="concentration must be positive"):
        calculate_dosage(70.0, 0.0)
```

---

### 2.5 Documentation Review

**Code Documentation:**

- [ ] Are docstrings complete?
  - One-line summary
  - Detailed description
  - Args documented
  - Returns documented
  - Raises documented
  - Examples provided for complex APIs

- [ ] Are complex algorithms explained?
- [ ] Are assumptions documented?
- [ ] Are limitations noted?
- [ ] Are performance characteristics documented?

**External Documentation:**

- [ ] Is the README updated if needed?
- [ ] Are API docs updated?
- [ ] Are migration guides provided?
- [ ] Are breaking changes documented?
- [ ] Is changelog updated?

---

### 2.6 Security Review

**Common Vulnerabilities (OWASP Top 10):**

- [ ] **Injection Prevention**
  - SQL injection prevented? (parameterized queries)
  - Command injection prevented?
  - LDAP injection prevented?
  - NoSQL injection prevented?

- [ ] **Authentication & Authorization**
  - Authentication required for sensitive operations?
  - Authorization checks in place?
  - Session management secure?
  - Password policies enforced?

- [ ] **Sensitive Data Exposure**
  - Is sensitive data encrypted at rest?
  - Is sensitive data encrypted in transit (HTTPS)?
  - Are credentials secured (not hardcoded)?
  - Is logging safe (no passwords, PII)?

- [ ] **XML External Entities (XXE)**
  - XML parsers configured securely?
  - External entity processing disabled?

- [ ] **Access Control**
  - Principle of least privilege enforced?
  - Direct object references protected?
  - Authorization checked at every level?

---

## Review Communication

### Issue Severity Levels

**🚨 CRITICAL** - Must fix before merge
- Security vulnerabilities
- Data corruption risks
- NASA rule violations in critical code
- Potential crashes or infinite loops

**⚠️ IMPORTANT** - Should fix before merge
- Performance issues
- Maintainability concerns
- Test coverage gaps
- Design improvements

**💡 MINOR** - Nice to have / Can defer
- Style preferences
- Code cleanup
- Documentation improvements
- Refactoring opportunities

### Feedback Template

```markdown
### Critical Issues 🚨

**1. [Issue Title] (Line X)**
```
[code example]
```
**Impact:** [What could go wrong]
**Suggestion:** [How to fix]
**Priority:** CRITICAL

### Important Issues ⚠️

**2. [Issue Title] (Line X)**
[Description and suggestion]

### Minor Issues 💡

**3. [Issue Title] (Line X)**
[Optional improvement]

### Positive Notes 👍
- [What was done well]
- [Good practices observed]

### Questions
1. [Clarifying question about design choice]
2. [Question about edge case handling]
```

---

## Example: Complete Review

```markdown
## Code Review: Add Payment Processing Module (#142)

**Author:** @alice  
**Reviewer:** @bob  
**Date:** 2024-02-15  
**Criticality:** HIGH (financial transactions)

---

### Summary
Solid implementation with good test coverage. Found a few critical safety issues 
that must be addressed before merge, particularly around error handling and 
input validation for financial data.

---

### Automated Checks ✅
- [x] Tests: ✅ Pass (93% coverage)
- [x] Linting: ✅ Pass (pylint 9.2/10)
- [x] Type check: ✅ Pass (mypy --strict)
- [x] Security: ✅ Pass (no vulnerabilities)
- [x] NASA rules: ⚠️ 2 violations (see below)

---

### Critical Issues 🚨

**1. Missing input validation (Lines 45-50)**
```python
# Current - UNSAFE
def process_payment(amount, currency):
    charge = create_charge(amount, currency)
    return charge.id

# Should be - SAFE
def process_payment(amount: Decimal, currency: str) -> tuple[bool, str, str]:
    """Process payment with validation."""
    assert isinstance(amount, Decimal), "Amount must be Decimal"
    assert amount > 0, "Amount must be positive"
    assert amount <= Decimal("1000000"), "Amount exceeds limit"
    assert currency in ["USD", "EUR", "GBP"], f"Invalid currency: {currency}"
    
    charge, err = create_charge(amount, currency)
    if err:
        return False, "", f"Charge failed: {err}"
    
    return True, charge.id, ""
```
**Impact:** Could process invalid payments, financial loss  
**Priority:** CRITICAL - Must fix before merge

**2. Unbounded retry loop (Line 78)**
```python
# Current - INFINITE LOOP RISK
while not payment_confirmed():
    time.sleep(1)
    check_status()

# Should be - BOUNDED
MAX_RETRIES = 30  # 30 seconds max
for attempt in range(MAX_RETRIES):
    if payment_confirmed():
        break
    time.sleep(1)
    check_status()
else:
    logger.error("Payment confirmation timeout")
    return False, "Timeout waiting for confirmation"
```
**Impact:** Could hang indefinitely  
**Rule:** NASA Rule 2 (bounded loops)  
**Priority:** CRITICAL

---

### Decision: ⚠️ CHANGES REQUESTED

**Must fix before merge:**
- Critical issues #1, #2

**Should address:**
- Important issue #3

**Estimated time:** 2-3 hours
```

---

## Review Best Practices

### For Reviewers

1. **Review promptly** (< 24 hours)
2. **Review thoroughly but pragmatically**
3. **Be constructive and collaborative**
   - Assume good intent
   - Explain reasoning
   - Suggest, don't demand
4. **Test the code** - Don't just read it
5. **Approve generously** - Minor issues can be addressed later
6. **Block sparingly** - Only for critical issues

### For Authors

1. **Keep PRs small** (< 400 lines)
2. **Self-review first** - Run this checklist
3. **Provide context** - Good PR description
4. **Respond to feedback** - Address comments
5. **Resolve conversations** - Mark as resolved when fixed

---

## Summary

Effective code review:
- **Catches bugs** before production
- **Shares knowledge** across team
- **Maintains standards** consistently
- **Improves code quality** over time
- **Builds team culture** of excellence

**Remember:** Review is a collaborative process, not a gatekeeping exercise. The goal is better code and better developers, not perfect code.
