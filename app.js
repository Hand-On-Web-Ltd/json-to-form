const defaultSchema = {
  title: "Contact Form",
  fields: [
    { name: "full_name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "age", label: "Age", type: "number" },
    { name: "dob", label: "Date of Birth", type: "date" },
    { name: "country", label: "Country", type: "select", options: ["United Kingdom", "United States", "Canada", "Australia", "Other"] },
    { name: "newsletter", label: "Subscribe to our newsletter", type: "checkbox" },
    { name: "message", label: "Your Message", type: "textarea" }
  ]
};

const schemaInput = document.getElementById('schemaInput');
const preview = document.getElementById('formPreview');

schemaInput.value = JSON.stringify(defaultSchema, null, 2);

function generate() {
  try {
    const schema = JSON.parse(schemaInput.value);
    renderForm(schema);
  } catch (e) {
    preview.innerHTML = `<div class="error">Invalid JSON: ${e.message}</div>`;
  }
}

function renderForm(schema) {
  let html = `<div class="form-preview"><h2>${schema.title || 'Form'}</h2><form>`;
  (schema.fields || []).forEach(f => {
    const req = f.required ? ' required' : '';
    const reqClass = f.required ? ' class="required"' : '';
    if (f.type === 'checkbox') {
      html += `<div class="form-group checkbox"><input type="checkbox" id="${f.name}" name="${f.name}"${req}><label for="${f.name}">${f.label}</label></div>`;
    } else if (f.type === 'textarea') {
      html += `<div class="form-group"><label${reqClass}>${f.label}</label><textarea name="${f.name}" placeholder="${f.label}"${req}></textarea></div>`;
    } else if (f.type === 'select') {
      const opts = (f.options || []).map(o => `<option value="${o}">${o}</option>`).join('');
      html += `<div class="form-group"><label${reqClass}>${f.label}</label><select name="${f.name}"${req}><option value="">Select...</option>${opts}</select></div>`;
    } else {
      html += `<div class="form-group"><label${reqClass}>${f.label}</label><input type="${f.type || 'text'}" name="${f.name}" placeholder="${f.label}"${req}></div>`;
    }
  });
  html += `<button type="submit" class="submit-btn">Submit</button></form></div>`;
  preview.innerHTML = html;
  preview.querySelector('form').addEventListener('submit', e => { e.preventDefault(); alert('Form submitted (demo)'); });
}

function exportHTML() {
  const html = preview.innerHTML;
  const formatted = html.replace(/></g, '>\n<');
  document.getElementById('exportCode').value = formatted;
  document.getElementById('exportModal').classList.add('active');
}

function closeModal() { document.getElementById('exportModal').classList.remove('active'); }

function copyCode() {
  document.getElementById('exportCode').select();
  document.execCommand('copy');
  alert('Copied to clipboard!');
}

generate();
