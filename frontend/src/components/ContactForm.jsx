import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const services = [
  { value: 'krankenfahrten', label: 'Krankenfahrten' },
  { value: 'rollstuhlfahrten', label: 'Rollstuhlfahrten' },
  { value: 'dialysefahrten', label: 'Dialysefahrten' },
  { value: 'chemofahrten', label: 'Chemo- & Strahlenfahrten' },
  { value: 'schuelerfahrten', label: 'Schülerfahrten' },
  { value: 'kurierfahrten', label: 'Kurierfahrten' },
  { value: 'sonstiges', label: 'Sonstiges' },
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: services.find(s => s.value === formData.service)?.label || formData.service,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="anfrage" 
      data-testid="contact-form-section"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">
            Kontaktformular
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-4 mb-6">
            Jetzt <span className="text-gradient">Anfrage senden</span>
          </h2>
          <p className="text-lg text-[#57534E] leading-relaxed">
            Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-blue-50 to-stone-50 rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
          {isSuccess ? (
            <div className="text-center py-8" data-testid="form-success">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] mb-2">Vielen Dank!</h3>
              <p className="text-[#57534E]">
                Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1C1917] font-medium">
                    Vollständiger Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    className="bg-white border-stone-200 focus:border-[#0F4C81] focus:ring-[#0F4C81]"
                    data-testid="form-name-input"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1C1917] font-medium">
                    Telefonnummer *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06753 1234567"
                    className="bg-white border-stone-200 focus:border-[#0F4C81] focus:ring-[#0F4C81]"
                    data-testid="form-phone-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1C1917] font-medium">
                    E-Mail Adresse *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    className="bg-white border-stone-200 focus:border-[#0F4C81] focus:ring-[#0F4C81]"
                    data-testid="form-email-input"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-[#1C1917] font-medium">
                    Gewünschte Leistung *
                  </Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={handleServiceChange}
                    required
                  >
                    <SelectTrigger 
                      className="bg-white border-stone-200 focus:border-[#0F4C81] focus:ring-[#0F4C81]"
                      data-testid="form-service-select"
                    >
                      <SelectValue placeholder="Bitte wählen..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message (required) */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#1C1917] font-medium">
                  Nachricht *
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an uns..."
                  className="w-full px-3 py-2 bg-white border border-stone-200 rounded-md focus:outline-none focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81] resize-none"
                  data-testid="form-message-input"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm" data-testid="form-error">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.service}
                className="w-full bg-[#0F4C81] hover:bg-[#0c3b66] text-white rounded-full py-6 text-lg font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="form-submit-button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Anfrage senden
                  </>
                )}
              </Button>

              <p className="text-sm text-[#78716C] text-center">
                * Pflichtfelder
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
