import contacts from "../data";

export function contactExists(phone: string, excludeIndex?: number): boolean {
  return contacts.some(
    (contact, index) => index !== excludeIndex && contact.phone === phone
  );
}
