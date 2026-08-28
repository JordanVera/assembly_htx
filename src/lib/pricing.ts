export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'weekday-hourly',
    name: 'Mon–Thu Hourly',
    price: '$85/hr',
    description: '$85 per hour + $75 cleaning fee · 4-hour minimum · Full day $800 (8am–11pm)',
    features: ["4-hour minimum", "$75 cleaning fee weekdays", "Exact entry & exit times", "Quiet time 10:30 PM"],
  },
  {
    id: 'friday',
    name: 'Friday',
    price: 'From $675',
    description: 'AM $675 (7am–3pm) · PM block (4pm–11:30pm) · Full day $1,000',
    features: ["No cleaning fee", "AM or PM blocks", "Full day option", "Ends by 11:30 PM"],
  },
  {
    id: 'saturday',
    name: 'Saturday',
    price: 'From $750',
    description: 'AM $750 (8am–4pm) · PM block (5pm–11:30pm) · Full day $1,200',
    highlighted: true,
    features: ["No cleaning fee", "Most popular day", "Full day $1,200", "Perfect for weddings"],
  },
  {
    id: 'sunday',
    name: 'Sunday',
    price: 'From $700',
    description: 'AM $700 (8am–4pm) · PM block (5pm–11:30pm) · Full day $1,100',
    features: ["No cleaning fee", "Brunch & shower favorite", "Full day $1,100", "Flexible time blocks"],
  },
];

export const ADD_ONS: PricingPackage[] = [];

export const PRICING_NOTES = ["Rental includes 50 black wooden folding chairs, (5) 6ft tables, (2) 4ft tables, and (5) 31in bar highs.", "$250 refundable damage deposit due 48 hours before your event.", "50% due to reserve \u00b7 Final 50% due 45 days prior \u00b7 BYOB, BYO catering, BYO DJ.", "Max capacity 50 guests seated or standing \u00b7 No smoking \u00b7 No hookah \u00b7 Quiet time 10:30 PM."];
