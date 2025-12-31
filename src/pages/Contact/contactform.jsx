import { useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
    };
    return (
        <Card className="shadow-2xl">
            <Card.Header className="pb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-sage-600 bg-clip-text text-transparent">Send a Message</h3>
                <p className="text-stone-600 mt-2">Fill out the form and we'll get back to you soon.</p>
            </Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-teal-500 transition-all"
                        type="text" placeholder="Your Name" required
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                        className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-teal-500 transition-all"
                        type="email" placeholder="Email Address" required
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <textarea
                        className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-teal-500 transition-all h-32"
                        placeholder="Your Message" required
                        value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <Button type="submit" variant="primary" className="w-full py-4 text-lg font-bold">Send Message</Button>
                </form>
            </Card.Body>
        </Card>
    );
};

export default ContactForm;