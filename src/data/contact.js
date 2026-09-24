export const CONTACT = {
  phoneDisplay: '+91 78766 26223',
  phoneTel: 'tel:+917876626223',
  whatsapp: 'https://wa.me/917876626223',
  facebook: 'https://www.facebook.com/share/1CV73Kf1be/',
}

export const whatsappFor = (text) => `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
