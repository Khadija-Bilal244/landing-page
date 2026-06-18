import './db.js';
import Contact from './models/Contact.js';

async function list() {
  try {
    const docs = await Contact.find().sort({ createdAt: -1 }).limit(20).lean();
    console.log('Recent contacts:', docs);
    process.exit(0);
  } catch (err) {
    console.error('Error querying contacts:', err);
    process.exit(1);
  }
}

list();
