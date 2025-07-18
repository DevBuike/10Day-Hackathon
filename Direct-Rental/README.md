# DirectRental – A Direct Tenant-Landlord Listing Platform

## Purpose
To develop a digital platform that connects landlords and tenants directly, allowing landlords to list multiple properties for a fee, and tenants to find suitable accommodation using GPS, filters, and verified property listings. The platform aims to reduce dependency on agents and prevent exorbitant service charges.

## Target Audience
* Primary Users:
	* Landlords (individual or corporate) listing rental properties.
	* Tenants (students, professionals, families) searching for rental housing.


* Secondary Users:
	* Property managers
	* Admin team (platform moderation, billing, support)



## Product Features
A. User Registration & Authentication
* Email and phone number verification
* Role-based sign-up: Tenant, Landlord, Admin
* Password recovery via email or OTP
* Social login (optional)

B. Landlord Dashboard
* Upload multiple property listings with: Title, Description, Price, Type (1-bedroom, studio, shared apartment, etc.), Amenities (Wi-Fi, kitchen, AC, parking, etc.), Image & video uploads, Address and GPS coordinates, Availability status.  
* Manage and edit listings
* Track listing views and inquiries
* Pay-to-list model:
	* Subscription or Pay-Per-Listing options
	* Instant payment gateway integration (Flutterwave, Paystack, etc.)
* Profile verification for higher visibility
* Option to feature a property at the top of listings

C. Tenant Dashboard
* Filtered property search: Location (via GPS or address), Budget, Property type, Amenities, Distance to city center or specific landmarks (e.g., university)
* Map-based listing view
* Save favorite listings
* Contact landlord directly (chat, phone, or email)
* Schedule viewing appointments
* Report fake or fraudulent listings

D. Search & Discovery
* Interactive map with clustered pins for high-density areas
* Nearby property suggestions
* Recently listed / most viewed properties
* Smart recommendations based on previous searches

E. Payment & Billing System
* Secure online payment for landlord listings
* Invoices and payment history
* Auto-renew subscription option
* Refund policy (if listing is rejected)

F. Moderation & Safety
* Admin panel for content moderation
* AI-assisted fraud detection (duplicate listings, suspicious descriptions)
* Blacklist/reporting system
* Identity verification (NIN, utility bill, or CAC for companies)

G. Notifications
* Email and SMS notifications:
* New property matches
* Message replies
* Listing status updates
* Renewal reminders

H. In-App Messaging (Optional)
* Secure chat between tenant and landlord
* Option to share photos and location
* Moderated for abuse or spam

I. Analytics & Reporting
* Landlord insights:
	* Views per listing
	* Conversion tracking (click to contact)

* Admin insights:
	* Active users
	* Revenue tracking
	* Popular locations and property types

J. Mobile Responsiveness
* Progressive Web App (PWA)
* Optimized for low-data environments

## User Stories
As a landlord, I want to:
* List multiple properties easily and affordably
* Pay for only what I use (per listing or monthly)
* Track interest and reach of my listings
* Feature my properties to increase visibility  

As a tenant, I want to:
* Search for houses near me using GPS
* Apply filters to find houses within my budget
* View genuine photos and property details
* Contact the landlord directly without an agent

## Business Model
* Freemium for tenants (fully free search)
* Paid listing options for landlords:
* ₦5,000/listing for 30 days
* 10,000/month for unlimited listings
* ₦50,000/month for premium listings (featured at top, verified badge)
* Commission on successfully closed deals (optional)
* Ads for real estate-related services (moving, repairs, furniture)

## Technical Requirements
* Frontend: React.js (Web), React Native (Mobile)
* Backend: Node.js + Express / FastAPI
* Database: MySQL, PostgreSQL or MongoDB
* Location Services: Google Maps API / OpenStreetMap
* Media Storage: Cloudinary / AWS S3
* Payments: Paystack / Flutterwave integration
* Auth: Firebase / Auth0 / JWT

## Success Metrics
* Number of listings posted per month
* Monthly active users (MAUs)
* Tenant-to-landlord contact ratio
* Time to first inquiry per listing
* Renewal rate for landlord subscriptions
* Number of fake listings reported vs. confirmed

## Assumptions & Risks
* Assumption: Users are tech-savvy enough to use mobile-first platforms.
* Risk: Fraudulent listings may reduce trust. Need strong moderation.
* Assumption: Landlords will be willing to pay for verified exposure.
* Risk: Market competition with platforms like PropertyPro, but our edge is in simplicity and direct access.

## Appendix (Nice to Have)
* Integration with WhatsApp Business for direct contact
* Referral system for tenants and landlords
* Virtual tour support (360 images or short videos)
* Blog/Help Center with renting advice and landlord guidelines