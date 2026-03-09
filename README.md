# JSON to Form

Paste a JSON schema on the left, see a working HTML form on the right. When you're happy with it, export the form HTML and drop it into your project.

No build tools, no dependencies — just open `index.html` and start creating forms.

## Supported Field Types

| Type | Renders as |
|------|-----------|
| `text` | Text input |
| `email` | Email input |
| `number` | Number input |
| `date` | Date picker |
| `textarea` | Multi-line text area |
| `select` | Dropdown (provide `options` array) |
| `checkbox` | Checkbox |

## Schema Format

```json
{
  "title": "Contact Form",
  "fields": [
    { "name": "full_name", "label": "Full Name", "type": "text", "required": true },
    { "name": "email", "label": "Email", "type": "email", "required": true },
    { "name": "age", "label": "Age", "type": "number" },
    { "name": "dob", "label": "Date of Birth", "type": "date" },
    { "name": "country", "label": "Country", "type": "select", "options": ["UK", "US", "Canada", "Other"] },
    { "name": "newsletter", "label": "Subscribe to newsletter", "type": "checkbox" },
    { "name": "message", "label": "Message", "type": "textarea" }
  ]
}
```

## How to Use

1. Open `index.html`
2. Edit the JSON schema in the left panel (or use the default example)
3. Click "Generate Form" to see the preview
4. Click "Export HTML" to copy the form code

## Use Cases

- Quickly mock up forms for client projects
- Generate contact forms, registration forms, feedback forms
- Test form layouts before writing backend code

## About Hand On Web
We build AI chatbots, voice agents, and automation tools for businesses.
- 🌐 [handonweb.com](https://www.handonweb.com)
- 📧 outreach@handonweb.com
- 📍 Chester, UK

## Licence
MIT
