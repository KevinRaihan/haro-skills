# Inspecting Element Attributes

When the snapshot doesn't show an element's `id`, `class`, `data-*` attributes, or other DOM properties, use `eval` to inspect them.

## Examples

```bash
playwright-cli snapshot
# snapshot shows a button as e7 but doesn't reveal its id or data attributes

# get the element's id
playwright-cli eval "el => el.id" e7

# get the element's class list
playwright-cli eval "el => el.className" e7

# get a data attribute
playwright-cli eval "el => el.getAttribute('data-testid')" e7

# get multiple attributes at once
playwright-cli eval "el => JSON.stringify({id: el.id, class: el.className, testId: el.getAttribute('data-testid')})" e7
```
