import './db.js';
import Contact from './models/Contact.js';

async function run() {
  try {
    const email = `compass-${Date.now()}@test.com`;
    const response = await fetch('http://127.0.0.1:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Compass Test', email, message: 'Testing Mongo save' })
    });
    const body = await response.json();
    console.log('responseStatus', response.status);
    console.log('responseBody', body);
    const saved = await Contact.find({ email }).sort({ createdAt: -1 }).lean();
    console.log('savedDocs', saved);
    process.exit(0);
  } catch (err) {
    console.error('error', err);
    process.exit(1);
  }
}

run();
