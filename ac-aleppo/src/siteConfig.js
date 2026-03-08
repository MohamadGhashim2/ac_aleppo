export const SITE_URL = "https://abu-halab.com";
export const PHONE = "+966546087818";
export const LOCATION_LINK = "https://maps.app.goo.gl/HEv9z2j2GvYXzhUR7";

export const getWhatsAppUrl = (message) => {
  const cleanPhone = PHONE.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};