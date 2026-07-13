export const governmentForms = [
  {
    id: "pan-card",
    title: "Permanent Account Number (PAN) Card Application",
    category: "Identity & Tax",
    description: "Official NSDL/UTIITSL portal to apply for a new PAN card or make changes/corrections to an existing PAN card.",
    official_url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    department: "Income Tax Department, Government of India",
    required_documents: [
      "Proof of Identity (Aadhaar Card, Passport, Voter ID, or Driving License)",
      "Proof of Address (Utility bill, Bank Statement, or Rent agreement)",
      "Proof of Date of Birth (Birth Certificate, Matriculation Certificate, or Passport)",
      "Two recent passport-sized color photographs"
    ],
    guidelines: [
      "Go to the official NSDL Online PAN Application portal.",
      "Select 'Form 49A' for Indian Citizens or 'Form 49AA' for Foreign Citizens.",
      "Select the category as 'Individual' unless applying for a company/firm.",
      "Fill in your personal details (name, date of birth, mobile number, email).",
      "Pay the processing fee of approximately ₹107 (online via credit/debit card, UPI, or net banking).",
      "Submit the application, download the generated PDF, and note your 15-digit acknowledgement number.",
      "If choosing physical document submission, mail the signed form along with documents to the NSDL office in Pune."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["pan", "pancard", "tax", "income tax", "permanent account number", "पैन कार्ड", "પેન કાર્ડ", "પાન કાર્ડ"]
  },
  {
    id: "aadhaar-update",
    title: "Aadhaar Card Update & Enrollment Portal",
    category: "Identity & Citizen Registry",
    description: "Official UIDAI portal to book an enrollment appointment, update address, check linking status, or download your e-Aadhaar.",
    official_url: "https://myaadhaar.uidai.gov.in/",
    department: "Unique Identification Authority of India (UIDAI)",
    required_documents: [
      "Proof of Identity (Passport, PAN Card, Voter ID, or Driving License)",
      "Proof of Address (Ration Card, Electricity Bill, Water Bill, Bank Passbook, or rent agreement)",
      "Proof of Date of Birth (Birth Certificate, SSLC Book, or Passport)"
    ],
    guidelines: [
      "Visit the MyAadhaar portal and log in using your Aadhaar number and OTP sent to your registered mobile number.",
      "Select 'Document Update' or 'Address Update' depending on your requirements.",
      "Carefully enter the new details matching your official records.",
      "Upload scanned high-quality PDF or JPEG copies of your supporting documents.",
      "Pay the nominal online update fee of ₹50.",
      "Receive a Update Request Number (URN) to track the status online.",
      "For biometric, name, or gender updates, book an appointment through the portal and visit your nearest Aadhaar Seva Kendra."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["aadhaar", "uidai", "aadhar", "identity card", "address change", "आधार", "આધાર"]
  },
  {
    id: "passport-seva",
    title: "Indian Passport Application (Passport Seva)",
    category: "Travel & Immigration",
    description: "Official Ministry of External Affairs portal to apply for a fresh passport, reissue passport, or check application status.",
    official_url: "https://www.passportindia.gov.in/",
    department: "Ministry of External Affairs, Government of India",
    required_documents: [
      "Proof of Date of Birth (Birth Certificate, School Leaving Certificate, or PAN Card)",
      "Proof of Address (Water/Electricity bill, Income Tax Assessment Order, Aadhaar, or Bank Statement)",
      "Non-ECR Category proof (Matriculation/10th standard certificate or higher degree)"
    ],
    guidelines: [
      "Register on the official Passport Seva Online Portal.",
      "Log in with your newly created credentials.",
      "Click on 'Apply for Fresh Passport/Reissue of Passport'.",
      "Fill in the application form online (personal details, family details, address history).",
      "Click 'Pay and Schedule Appointment' to book a slot at your nearest Passport Seva Kendra (PSK).",
      "Pay the online application fee of ₹1500 (standard) or ₹3500 (Tatkaal).",
      "Print the application receipt containing the Application Reference Number (ARN).",
      "Visit the selected PSK on your appointed date with all original documents and one set of self-attested photocopies."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["passport", "pass port", "visa", "travel", "passport seva", "पासपोर्ट", "પાસપોર્ટ"]
  },
  {
    id: "rti-online",
    title: "Right to Information (RTI) Online Filing",
    category: "Citizen Rights & Transparency",
    description: "Official portal for Indian citizens to file RTI applications and appeals online to Central Government Ministries and Departments.",
    official_url: "https://rtionline.gov.in/",
    department: "Department of Personnel and Training, Government of India",
    required_documents: [
      "Proof of Identity (Aadhaar, Voter ID)",
      "BPL (Below Poverty Line) Card / Certificate (Only if seeking fee exemption)"
    ],
    guidelines: [
      "Access the RTI Online portal.",
      "Click on 'Submit Request' on the homepage.",
      "Read the guidelines carefully and check the 'I have read and understood' box to proceed.",
      "Select the Ministry, Department, or Public Authority you wish to file the query with.",
      "Fill in your personal information (name, address, state, status).",
      "Write your specific information request clearly in the text box (up to 3000 characters).",
      "Attach any supporting documents in PDF format if needed.",
      "Pay the RTI application fee of ₹10 using online banking, credit/debit card, or UPI (BPL cardholders are exempt from this fee).",
      "Submit and note down the unique registration number for future tracking."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["rti", "right to information", "complaint", "transparency", "information request", "आरटीআই", "આરટીઆઈ"]
  },
  {
    id: "driving-license",
    title: "Driving License & Learner's License Portal (Sarathi)",
    category: "Transport & Licensing",
    description: "Official Ministry of Road Transport and Highways portal to apply for a learner's license, permanent driving license, or renew vehicle details.",
    official_url: "https://sarathi.parivahan.gov.in/",
    department: "Ministry of Road Transport and Highways (MoRTH)",
    required_documents: [
      "Proof of Age (School Certificate, Birth Certificate, or PAN Card)",
      "Proof of Address (Aadhaar Card, Voter ID, Passport, or LIC Policy)",
      "Medical Certificate Form 1A (Required for commercial vehicles or applicants over 40 years old)",
      "Learner's License Number (For permanent license applications)"
    ],
    guidelines: [
      "Visit the Parivahan Sarathi portal and select your state.",
      "Click on 'Apply for Learner's License' first if you do not have one.",
      "Fill in the personal details, upload age and address proofs, and upload a signature/photo.",
      "Pay the application fee and book a slot for the online Learner's Test.",
      "Pass the test to receive your Learner's License.",
      "After 30 days of holding the Learner's License, select 'Apply for Driving License'.",
      "Enter your Learner's License number, book a practical driving test slot, and pay the fee.",
      "Visit the RTO track, pass the driving test under an inspector, and your physical driving license will be dispatched via speed post."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["driving license", "dl", "learner license", "rto", "vehicle", "sarathi", "parivahan", "ડ્રાઇવિંગ લાયસન્સ", "ड्राइविंग लाइसेंस"]
  },
  {
    id: "voter-registration",
    title: "Voter ID Card Registration (Voter Service Portal)",
    category: "Elections & Voting",
    description: "Official Election Commission of India portal for fresh voter ID registration (Form 6), shifts/corrections (Form 8), or downloading digital EPIC.",
    official_url: "https://voters.eci.gov.in/",
    department: "Election Commission of India (ECI)",
    required_documents: [
      "Passport-sized color photograph",
      "Proof of Identity & Age (Aadhaar, Birth Certificate, PAN, or Indian Passport)",
      "Proof of Ordinary Residence (Electricity/Water bill, Gas connection card, or Bank Passbook)"
    ],
    guidelines: [
      "Go to the Voters Service Portal (VSP) website.",
      "Register as a new user using your mobile number and email.",
      "Log in and click on 'New registration for general electors (Form 6)'.",
      "Fill in details across sections A to K (state/district, personal, relative details, contact, and address).",
      "Upload your passport-sized photograph and scan copies of age and residence proofs.",
      "Submit the application and download the submitted PDF containing your Reference ID.",
      "A Booth Level Officer (BLO) will visit your house for physical verification, after which your Voter ID card will be issued and mailed to you."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["voter id", "election card", "voter card", "epic", "eci", "vote", "મતدار કાર્ડ", "वोटर आईडी"]
  },
  {
    id: "ration-card",
    title: "National Food Security Act (NFSA) Ration Card Portal",
    category: "Welfare & Essential Goods",
    description: "Centralized link to state food department portals to apply for a ration card, verify family members, or manage local fair price shop details.",
    official_url: "https://nfsa.gov.in/",
    department: "Department of Food and Public Distribution, Government of India",
    required_documents: [
      "Aadhaar cards of all family members",
      "Income Certificate of the head of family",
      "Address Proof (Electricity bill, gas bill, or bank passbook)",
      "Passport-sized photograph of the head of family (usually female head)"
    ],
    guidelines: [
      "Visit the NFSA Portal and select 'Ration Card' followed by 'Ration Card Details on State Portals'.",
      "Select your specific state to be redirected to your state's Food & Civil Supplies portal.",
      "Log in or register on the state civil supplies portal.",
      "Fill out the new Ration Card application form online.",
      "Add names, Aadhaar details, and relationships of all family members.",
      "Upload the required documents (income certificate, address proof, and photos).",
      "Select your local Fair Price Shop (ration depot) and submit.",
      "Download the acknowledgement receipt. The field verification officer will visit for verification before card approval."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["ration card", "rashan card", "nfsa", "food card", "ration", "रेशन कार्ड", "રેશન કાર્ડ"]
  },
  {
    id: "epfo-portal",
    title: "EPFO Member Portal (Provident Fund & UAN Services)",
    category: "Retirement & Savings",
    description: "Official EPFO Member Portal to activate UAN, view PF passbook, update KYC, or submit online claim requests for PF withdrawal.",
    official_url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
    department: "Employees' Provident Fund Organisation (EPFO), Ministry of Labour & Employment",
    required_documents: [
      "Universal Account Number (UAN)",
      "Aadhaar Card (linked to UAN and mobile number)",
      "PAN Card (required for tax deductions if withdrawal is within 5 years of service)",
      "Bank Account passbook / cancelled cheque with printed name & IFSC"
    ],
    guidelines: [
      "Visit the EPFO Member Unified Portal.",
      "Click on 'Activate UAN' under the Important Links section if you haven't activated it yet.",
      "Enter your UAN, Aadhaar number, Name, DOB, and Mobile number, then get the Authorization PIN.",
      "Once activated, log in with your UAN and Password.",
      "Go to the 'Manage' tab and select 'KYC' to verify Aadhaar, PAN, and Bank details.",
      "To check your balance, visit the separate EPFO Passbook Portal.",
      "To withdraw funds or transfer PF, go to the 'Online Services' tab and select 'Claim (Form-31, 19, 10C & 10D)'."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["pf", "provident fund", "epfo", "epf", "uan", "retire", "savings", "पीएफ", "પીએફ"]
  },
  {
    id: "digilocker",
    title: "DigiLocker Document Storage & Verification Portal",
    category: "Identity & Digital Vault",
    description: "Official MeitY cloud platform to issue, verify, and store key documents like Driving License, vehicle RC, marksheets, and PAN cards digitally.",
    official_url: "https://www.digilocker.gov.in/",
    department: "Ministry of Electronics and Information Technology (MeitY), Government of India",
    required_documents: [
      "Aadhaar Card",
      "Active mobile number linked to Aadhaar (for receiving verification OTP)"
    ],
    guidelines: [
      "Go to the DigiLocker portal or download the mobile app.",
      "Click on 'Sign Up' and enter your full name, DOB, mobile number, and set a 6-digit security PIN.",
      "Enter your Aadhaar Number to link your profile.",
      "Verify registration with the OTP sent to your Aadhaar-linked mobile number.",
      "Once logged in, go to 'Search Documents' to locate issuers (e.g. CBSE, Income Tax Dept, State Transport).",
      "Enter details like Roll Number or registration details to pull digital certificates.",
      "These documents are legally valid under the IT Act, 2000, and can be presented to authorities."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["digilocker", "digi locker", "documents", "marksheet", "storage", "rc copy", "ડીજીલોકર", "डिजिलॉकर"]
  },
  {
    id: "itr-filing",
    title: "Income Tax Return (ITR) e-Filing Portal",
    category: "Identity & Tax",
    description: "Official Income Tax Department portal to file returns, check refund status, verify Form 26AS, and e-verify tax compliance details.",
    official_url: "https://www.incometax.gov.in/iec/foportal/",
    department: "Income Tax Department, Ministry of Finance, Government of India",
    required_documents: [
      "PAN Card",
      "Aadhaar Card",
      "Form 16 (issued by employer) or salary slips",
      "Bank Account statement and interest certificates",
      "Tax saving investment proofs (under 80C, 80D, etc.)"
    ],
    guidelines: [
      "Go to the Income Tax e-Filing Portal.",
      "Register using your PAN card number if you are a new user, or click 'Login'.",
      "Navigate to the 'e-File' menu and select 'Income Tax Returns' followed by 'File Income Tax Return'.",
      "Select the Assessment Year and filing mode (Online).",
      "Select the correct ITR Form (e.g. ITR-1 for salaried individuals with income up to ₹50 Lakhs).",
      "Confirm the pre-filled data sourced from Form 26AS and AIS (Annual Information Statement).",
      "Verify tax calculation, pay any outstanding dues, and click 'Submit'.",
      "E-verify the return within 30 days using Aadhaar OTP to complete the process."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["itr", "income tax return", "tax return", "file tax", "refund status", "आयकर", "આયકર વેરો"]
  },
  {
    id: "pm-kisan",
    title: "PM Kisan Samman Nidhi Farmer Registration Portal",
    category: "Welfare & Essential Goods",
    description: "Official portal for eligible farmers to register for direct financial benefits of ₹6,000 per year, update details, or complete eKYC.",
    official_url: "https://pmkisan.gov.in/",
    department: "Ministry of Agriculture & Farmers Welfare, Government of India",
    required_documents: [
      "Aadhaar Card",
      "Landholding ownership documents / land registry papers",
      "Bank Account Passbook (with IFSC)",
      "Active Mobile Number"
    ],
    guidelines: [
      "Access the PM Kisan official portal.",
      "Click on 'New Farmer Registration' in the Farmers Corner section.",
      "Select rural or urban registration, enter your Aadhaar card number, mobile number, and select your state.",
      "Enter the OTP received on your mobile to verify access.",
      "Fill in state, district, sub-district, block, and village details.",
      "Enter farmer details, land ownership details (Survey/Khata number, land size).",
      "Upload scanned copies of land documents, check the declaration box, and click 'Save'.",
      "Your application will be forwarded to state authority for approval."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["pm kisan", "farmer", "agriculture", "land subsidy", "pmkisan", "કિસાન યોજના", "किसान"]
  },
  {
    id: "vahan-seva",
    title: "Vahan Seva (Vehicle Registration & RC Services)",
    category: "Transport & Licensing",
    description: "Official transport portal to apply for vehicle fitness certificate, transfer ownership (NOC), pay road taxes, or view RC status.",
    official_url: "https://vahan.parivahan.gov.in/vahanservice/",
    department: "Ministry of Road Transport and Highways (MoRTH), Government of India",
    required_documents: [
      "Vehicle Registration Certificate (RC) Number",
      "Chassis Number and Engine Number of the vehicle",
      "Valid Insurance certificate and PUC certificate",
      "Owner's identity proof (Aadhaar, Voter ID)"
    ],
    guidelines: [
      "Visit Vahan Parivahan Portal and select your state.",
      "Select your local RTO registration office or enter your vehicle registration number.",
      "Choose from services: 'Pay Your Tax', 'Apply for Transfer of Ownership', or 'Hypothecation Termination'.",
      "Enter your registration number and Chassis/Engine number.",
      "Verify the details loaded from the central Vahan database.",
      "Pay outstanding taxes or application fees via the integrated payment gateway.",
      "Print the receipt and book an RTO appointment if physical inspection or signature collection is required."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["vahan", "rc status", "road tax", "vehicle fitness", "transfer rc", "વાહન રજીસ્ટ્રેશન", "वाहन"]
  },
  {
    id: "crs-registry",
    title: "Civil Registration System (Birth & Death Registration)",
    category: "Identity & Citizen Registry",
    description: "Official portal under the Registrar General of India to report, register, and generate certificates for births and deaths online.",
    official_url: "https://crsorgi.gov.in/",
    department: "Office of the Registrar General of India, Ministry of Home Affairs",
    required_documents: [
      "Hospital Discharge Slip / Birth Report form from hospital authorities",
      "Aadhaar Cards of both parents",
      "Marriage Certificate (optional, for child registration)",
      "Death report / medical cause certificate (for death registry)"
    ],
    guidelines: [
      "Go to the CRS Portal (Civil Registration System).",
      "Click on 'General Public Signup' on the right panel.",
      "Create a user account by entering user name, email, mobile number, and the location of occurrence.",
      "Log in and select 'Birth Registration' or 'Death Registration'.",
      "Fill out the form: date of event, child/deceased details, parent details, and address.",
      "Upload the hospital declaration slip / institutional birth certificate.",
      "Submit the application within 21 days of birth/death to avoid late registry penalties.",
      "Print the application form and submit it to your local Registrar/Municipal office for final signature and issuance."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["birth certificate", "death certificate", "crs", "registry", "જન્મનું પ્રમાણપત્ર", "जन्म प्रमाण पत्र"]
  },
  {
    id: "abha-health-card",
    title: "Ayushman Bharat Health Account (ABHA Card) Portal",
    category: "Welfare & Health",
    description: "Official ABDM portal to generate your 14-digit ABHA ID card, link medical records digitally, and access Ayushman Bharat health insurance.",
    official_url: "https://abha.abdm.gov.in/",
    department: "National Health Authority (NHA), Ministry of Health and Family Welfare",
    required_documents: [
      "Aadhaar Card",
      "Active mobile number linked to your Aadhaar Card (for OTP verification)",
      "Driving License (optional fallback)"
    ],
    guidelines: [
      "Visit the ABHA creation portal.",
      "Click on 'Create ABHA Number'.",
      "Select 'Using Aadhaar' (recommended) or 'Using Driving License'.",
      "Enter your Aadhaar number, read the consent terms, and verify the captcha.",
      "Enter the OTP sent to your Aadhaar-registered mobile number.",
      "Enter your personal details (name, DOB, gender) and set up an ABHA Address (similar to a UPI ID, e.g. citizen@abdm).",
      "Link your mobile number, verify the registration, and instantly download your digital ABHA Card."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["abha", "health card", "ayushman bharat", "pmjay", "medical id", "આભા કાર્ડ", "आभा कार्ड"]
  },
  {
    id: "eshram-card",
    title: "e-Shram National Unorganized Workers Database",
    category: "Welfare & Essential Goods",
    description: "Official database portal to register as an unorganized worker to receive welfare benefits, social security schemes, and e-Shram identity card.",
    official_url: "https://eshram.gov.in/",
    department: "Ministry of Labour & Employment, Government of India",
    required_documents: [
      "Aadhaar Card",
      "Active mobile number linked to Aadhaar",
      "Bank Account details (Bank name, account number, IFSC code)",
      "Details of occupation / skill group"
    ],
    guidelines: [
      "Access the e-Shram registration portal and click on 'Register on e-Shram'.",
      "Enter your Aadhaar-linked mobile number and verification captcha.",
      "Select whether you are a member of EPFO/ESIC (unorganized workers should select No).",
      "Enter the OTP sent to your mobile.",
      "Enter your Aadhaar card number, accept the terms, and enter the Aadhaar OTP to pull your profile data.",
      "Verify personal details, enter address details, education details, bank account details, and select your primary occupation category.",
      "Review the self-declaration details and click submit to generate your 12-digit UAN e-Shram Card."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["eshram", "shram card", "unorganized workers", "labor card", "ઈ શ્રમ કાર્ડ", "ई श्रम"]
  },
  {
    id: "national-scholarship",
    title: "National Scholarship Portal (NSP)",
    category: "Welfare & Education",
    description: "Official portal for minority, SC/ST, and general category students to apply for central, state, and UGC welfares and scholarships.",
    official_url: "https://scholarships.gov.in/",
    department: "Ministry of Electronics and Information Technology (MeitY), Government of India",
    required_documents: [
      "Student photograph",
      "Aadhaar Card (or Aadhaar Enrolment ID)",
      "Income Certificate (issued by competent revenue authority)",
      "Caste Certificate / Category certificate (if applying under SC/ST/OBC quota)",
      "Previous academic marksheets (matriculation/degrees)",
      "Fee receipt of current academic year & bonafide student certificate"
    ],
    guidelines: [
      "Visit the National Scholarship Portal (NSP).",
      "Click on 'New Registration' in the top menu.",
      "Read the undertaking guidelines, tick the confirmation boxes, and click 'Continue'.",
      "Select your state of domicile, scholarship category (Pre-Matric, Post-Matric), student name, scheme type, and gender.",
      "Provide bank account details (IFSC, Account number) and select Aadhaar card as your identification details.",
      "Once registered, log in using the Application ID and Password sent to your mobile.",
      "Fill in the application details, upload scanned documents, save, and submit.",
      "Forward the bonafide certificate to your school/college institute for online verification."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["nsp", "scholarship", "national scholarship portal", "student grant", "स्कॉलरशिप", "સ્કોલરશીપ"]
  },
  {
    id: "jee-main",
    title: "JEE Main Exam Registration (Joint Entrance Examination)",
    category: "Education & Exams",
    description: "Official NTA portal to apply online for JEE Main exam for admissions to premier engineering colleges (NITs, IIITs, CFTIs) and eligibility for JEE Advanced.",
    official_url: "https://jeemain.nta.ac.in/",
    department: "National Testing Agency (NTA), Ministry of Education, Government of India",
    required_documents: [
      "Scanned copy of recent Passport-sized Photograph (with 80% face visible, white background)",
      "Scanned Signature copy",
      "Category Certificate (SC/ST/OBC/EWS) if applicable",
      "PwD Certificate if applicable",
      "Class 10 and Class 12 academic transcripts"
    ],
    guidelines: [
      "Visit the official NTA JEE Main Portal.",
      "Click on 'Registration/Login' button.",
      "Select 'New Registration' to generate a system application number.",
      "Fill in personal details, create a secure password, and submit the OTP sent to your email and mobile.",
      "Log in using your Application Number and Password.",
      "Fill the online application form (academic qualifications, exam center city preferences, paper medium).",
      "Upload high-quality scanned copies of photograph, signature, and category certificates.",
      "Pay the examination fee online via net banking, UPI, or credit/debit cards.",
      "Download and save the Confirmation Page for future reference."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["jee", "jee main", "joint entrance examination", "nta", "engineering", "iit", "nit", "जी", "જેઈઈ"]
  },
  {
    id: "neet-ug",
    title: "NEET UG Entrance Exam Portal (Medical Admissions)",
    category: "Education & Exams",
    description: "Official NTA portal to apply online for the National Eligibility cum Entrance Test (NEET-UG) for admission to MBBS, BDS, AYUSH, and other medical courses.",
    official_url: "https://exams.nta.ac.in/NEET/",
    department: "National Testing Agency (NTA), Ministry of Education, Government of India",
    required_documents: [
      "Passport-sized photograph (white background, 80% face visible)",
      "Postcard-sized photograph (4x6 inches, white background)",
      "Scanned Signature copy",
      "Left and Right-hand fingers and thumb impressions",
      "Category Certificate (if applicable)"
    ],
    guidelines: [
      "Go to the official NTA NEET portal.",
      "Click on 'New Registration' and fill in Aadhaar details, name, DOB, and contact details to get a system-generated Application Number.",
      "Log in and fill in the detailed application form (choice of exam cities, educational details of Class 10/11/12).",
      "Upload scanned copies of passport photograph, postcard photograph, signature, thumb impressions, and citizenship certificate (if NRI).",
      "Pay the examination fee online via the integrated gateway (UPI/Cards/Netbanking).",
      "Submit the application and print the confirmation receipt page.",
      "Ensure the details are absolutely correct, as NTA allows correction windows only for specific fields later."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["neet", "neet ug", "medical exam", "nta neet", "mbbs admission", "doctor", "नीट", "નીટ"]
  },
  {
    id: "upsc-online",
    title: "UPSC Online Application Portal (Civil Services & Central Jobs)",
    category: "Recruitment & Jobs",
    description: "Official Union Public Service Commission (UPSC) portal to complete One-Time Registration (OTR) and apply online for Civil Services (IAS/IPS), NDA, CDS, and other central exams.",
    official_url: "https://upsconline.nic.in/",
    department: "Union Public Service Commission (UPSC), Government of India",
    required_documents: [
      "Scanned Passport-sized Photograph",
      "Scanned Signature copy",
      "Valid Photo ID Card (Aadhaar Card, Voter ID, PAN Card, Passport, or Driving License)",
      "Educational qualification certificates"
    ],
    guidelines: [
      "Visit the UPSC Online portal.",
      "Click on 'One-Time Registration (OTR) for Examinations' first.",
      "Provide name, DOB, mobile, email, and security questions to complete OTR.",
      "Log in using your Email/Mobile Number and OTP.",
      "Go to 'Latest Notification' in the dashboard.",
      "Click on 'Part-I Registration' for your selected exam (e.g. Civil Services Examination).",
      "Fill in personal, educational, and communication details.",
      "Pay the nominal application fee of ₹100 (female/SC/ST/PwBD candidates are exempt).",
      "Complete 'Part-II Registration' by uploading scanned photo, signature, and ID card proof.",
      "Select exam center, agree to declaration, and submit."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["upsc", "ias", "ips", "civil services", "nda", "cds", "government job", "संघ लोक सेवा", "યુપીએસસી"]
  },
  {
    id: "gst-portal",
    title: "Goods & Services Tax (GST) Common Portal",
    category: "Business & Commerce",
    description: "Official government portal for businesses to apply for fresh GST registration, file monthly/quarterly tax returns (GSTR), and track tax credits.",
    official_url: "https://www.gst.gov.in/",
    department: "GST Council, Department of Revenue, Ministry of Finance",
    required_documents: [
      "PAN Card of the Business / Partner / Promoter",
      "Proof of constitution/incorporation of business (Partnership deed, registration certificate)",
      "Proof of principal place of business (Electricity bill, property deed, rent agreement)",
      "Photograph of Promoters/Partners",
      "Bank Account details (Passbook or cancelled cheque leaf)"
    ],
    guidelines: [
      "Access the GST portal and select Services > Registration > New Registration.",
      "Select 'Taxpayer' category, enter PAN, Business name, State, Mobile, and Email.",
      "Verify registration with OTPs sent to Mobile and Email to generate a Temporary Reference Number (TRN).",
      "Log in using the TRN and fill out the detailed form (Business Details, Promoters, Principal Place, Goods/Services list).",
      "Upload scanned business deeds, address proofs, and promoter photos.",
      "E-sign the application using Aadhaar OTP or Digital Signature Certificate (DSC).",
      "Receive an Application Reference Number (ARN) to track approval status."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["gst", "gst registration", "goods and services tax", "gstr", "business tax", "tax invoice", "જીએસટી", "जीएसटी"]
  },
  {
    id: "msme-udyam",
    title: "MSME Udyam Business Registration Portal",
    category: "Business & Commerce",
    description: "Official Ministry of MSME portal to register micro, small, and medium businesses online, generate Udyam certificates, and access business welfares.",
    official_url: "https://udyamregistration.gov.in/",
    department: "Ministry of Micro, Small and Medium Enterprises (MSME), Government of India",
    required_documents: [
      "Aadhaar Card of the Proprietor / Managing Partner / Director",
      "PAN Card of the Business / Organisation",
      "GSTIN (Goods and Services Tax Identification Number) if applicable",
      "Bank Account details (Account Number, IFSC)"
    ],
    guidelines: [
      "Visit the official Udyam Registration Portal.",
      "Click on 'For New Entrepreneurs who are not registered yet as MSME'.",
      "Enter the entrepreneur's Aadhaar Number and Name, then click 'Validate and Generate OTP'.",
      "Verify with Aadhaar OTP to open the registration form.",
      "Enter PAN Card details of the business for auto-validation of tax details.",
      "Fill in business details (Enterprise Name, Type of Organisation, Location of Plants, Office Address).",
      "Provide bank account details, investment size, and employee headcount.",
      "Select the National Industrial Classification (NIC) code matching your business activity.",
      "Submit the form to instantly generate a free digital Udyam Registration Certificate."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["msme", "udyam", "business certificate", "small business registration", "subsidy", "ઉદ્યોગ રજીસ્ટ્રેશન", "उद्योग"]
  },
  {
    id: "cuet-ug",
    title: "CUET UG Entrance Exam Portal (Central Universities)",
    category: "Education & Exams",
    description: "Official NTA portal to register online for the Common University Entrance Test (CUET-UG) for admission to undergraduate courses in Central and partner Universities.",
    official_url: "https://exams.nta.ac.in/CUET-UG/",
    department: "National Testing Agency (NTA), Ministry of Education, Government of India",
    required_documents: [
      "Scanned copy of recent Passport-sized Photograph (white background)",
      "Scanned Signature copy",
      "Class 10 Certificate & Class 12 Marks details",
      "Category / Caste certificate (if applicable)"
    ],
    guidelines: [
      "Access the NTA CUET-UG Portal.",
      "Click on 'New Registration' and fill details to generate login Application ID and Password.",
      "Log in and select the list of Universities and courses you wish to apply for.",
      "Select the list of test subject papers and exam medium languages.",
      "Choose preferred exam center cities.",
      "Upload scanned photos, signatures, and category documents.",
      "Pay the test fee online (varies based on the number of subjects selected).",
      "Submit and save the Confirmation Page."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["cuet", "cuet ug", "university admission", "college exam", "nta cuet", "सीयूईटी", "સીયુઈટી"]
  },
  {
    id: "gate-exam",
    title: "GATE Online Application Processing System (GOAPS)",
    category: "Education & Exams",
    description: "Official portal to apply online for the Graduate Aptitude Test in Engineering (GATE) for postgraduate M.Tech admissions and PSU jobs eligibility.",
    official_url: "https://gate2024.iisc.ac.in/",
    department: "Indian Institute of Science (IISc) / IITs, Ministry of Education, Government of India",
    required_documents: [
      "High-quality Passport-sized color photograph",
      "Scanned Signature copy",
      "Valid Photo ID document (Aadhaar, Passport, PAN, or Voter ID)",
      "Degree Certificate / Provisional Degree Certificate / Course Completion Certificate",
      "Category Certificate (SC/ST/OBC-NCL) if applicable"
    ],
    guidelines: [
      "Go to the GATE official portal (e.g. GOAPS link provided).",
      "Register as a new user with name, email, mobile number, and generate a password.",
      "Log in with the Enrollment ID sent to your email.",
      "Select exam papers (you can apply for up to two papers) and choose three preferred exam cities.",
      "Fill in personal details and qualifying degree details.",
      "Upload scanned copies of photo, signature, qualifying degree, and category certificates.",
      "Check the declaration box, review the application, and pay the fee online (varying for category/female candidates).",
      "Save the generated GOAPS application PDF."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["gate", "gate exam", "mtech admission", "iisc gate", "iit gate", "engineering exam", "गेट", "ગેટ"]
  },
  {
    id: "mca21-portal",
    title: "MCA21 Corporate Services & Company Registry",
    category: "Business & Commerce",
    description: "Official Ministry of Corporate Affairs portal for online company incorporation (SPICe+ form), DIN registration, and annual filing compliance checks.",
    official_url: "https://www.mca.gov.in/",
    department: "Ministry of Corporate Affairs, Government of India",
    required_documents: [
      "Director Identification Number (DIN)",
      "Digital Signature Certificate (DSC) for directors",
      "PAN Card of proposed company and directors",
      "Proof of registered office address (Lease deed, utility bills)"
    ],
    guidelines: [
      "Go to the MCA Portal and register a Business User account.",
      "Procure a Digital Signature Certificate (DSC) for the directors first.",
      "Apply for company name reservation using the 'RUN' (Reserve Unique Name) service.",
      "Open the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) form.",
      "Fill in company details, details of directors, and apply for DIN, PAN, and TAN concurrently.",
      "Upload e-MoA (Memorandum of Association) and e-AoA (Articles of Association).",
      "E-sign SPICe+ forms using the DSC of proposed directors.",
      "Pay name registration and stamp duties online.",
      "Upon verification, MCA issues a Certificate of Incorporation (COI)."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["mca", "company registration", "mca21", "director id", "din", "incorporate", "કંપની રજીસ્ટ્રેશન", "कंपनी पंजीकरण"]
  },
  {
    id: "digital-gujarat",
    title: "Digital Gujarat Portal (Scholarships & State Certificates)",
    category: "State Portals & Welfare",
    description: "Unified Gujarat Government portal to apply for state-sponsored student scholarships, income certificates, caste certificates, and domicile proofs.",
    official_url: "https://www.digitalgujarat.gov.in/",
    department: "Department of IT & Science, Government of Gujarat",
    required_documents: [
      "Aadhaar Card",
      "Caste / Category Certificate (for reservation welfares)",
      "Income Certificate issued by Talati / Mamlatdar",
      "Residence proof (Voter ID, electricity bill, or ration card)",
      "Academic marksheets (for student scholarships)"
    ],
    guidelines: [
      "Access the Digital Gujarat portal and click 'Register' at the top right.",
      "Provide mobile, email, and create password.",
      "Log in and complete your Citizen Profile (name, permanent address, contact details).",
      "Select 'Services' to view available state applications.",
      "Choose your desired service (e.g. 'Income Certificate' or 'Post-Matric Scholarship').",
      "Fill in details and upload scanned copies of address proof, income certificate, and caste proof.",
      "Pay the nominal citizen service fee online (approx ₹20 to ₹30).",
      "Submit and note down the query reference ID. Your approved certificate will be available to download on this portal."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["digital gujarat", "gujarat scholarship", "income certificate gujarat", "gujarat portal", "ડીજીટલ ગુજરાત", "डिजिटल गुजरात"]
  },
  {
    id: "up-edistrict",
    title: "UP e-District Portal (Citizen Welfare Services)",
    category: "State Portals & Welfare",
    description: "Official Uttar Pradesh government portal for online issuance of birth/death records, income/caste certificates, and pension applications.",
    official_url: "https://edistrict.up.gov.in/",
    department: "Department of IT & Electronics, Government of Uttar Pradesh",
    required_documents: [
      "Aadhaar Card",
      "Self-Declaration Form (downloadable from the portal)",
      "Passport-sized photograph",
      "Land papers (Khatauni) or income declaration statement"
    ],
    guidelines: [
      "Visit the UP e-District portal.",
      "Click on 'e-District Login' or 'Citizen Login (E-Sathi)'.",
      "Register a new user ID under the E-Sathi panel.",
      "Log in and choose from services: Caste (Jati), Income (Aay), Domicle (Nivas) certificates.",
      "Fill out the Hindi forms carefully.",
      "Upload scanned copies of self-declaration form, photo, and address proofs.",
      "Pay the state processing fee of ₹15 online.",
      "Track status online. Once approved by Lekhpal/Tehsildar, download the digitally signed certificate."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["up edistrict", "uttar pradesh edistrict", "esathi", "up scholarship", "यूपी ई-डिस्ट्रिक्ट", "યુપી ઈડીસ્ટ્રીક્ટ"]
  },
  {
    id: "aaple-sarkar",
    title: "Aaple Sarkar Maharashtra Portal (Citizen Services)",
    category: "State Portals & Welfare",
    description: "Official Maharashtra Government portal to access right to services (RTS), verify land records (7/12), and apply for domicile, income, or caste certificates.",
    official_url: "https://aaplesarkar.mahaonline.gov.in/",
    department: "Directorate of Information Technology, Government of Maharashtra",
    required_documents: [
      "Identity Proof (PAN Card, Aadhaar Card, or Voter ID)",
      "Address Proof (Passport, Driving License, or Utility bill)",
      "Affidavit / Self-declaration form",
      "Caste proof or income statement matching Mamlatdar files"
    ],
    guidelines: [
      "Go to Aaple Sarkar portal and click on 'New User? Register Here'.",
      "Create profile by verifying details with Aadhaar OTP.",
      "Log in with username and password.",
      "Select target department (e.g. Revenue Department for Income/Domicile).",
      "Fill the Marathi form and upload scanned photographs and identity documents.",
      "Pay the processing service fee online.",
      "Note the Application ID to track the verification pipeline.",
      "Once approved by the Tehsildar, download your certificate directly from your Aaple Sarkar inbox."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["aaple sarkar", "maharashtra portal", "mahadbt", "mumbai certificate", "आपले सरकार", "આપલે સરકાર"]
  },
  {
    id: "seva-sindhu",
    title: "Karnataka Seva Sindhu Welfare Portal",
    category: "State Portals & Welfare",
    description: "Official Karnataka government portal to register for Gruha Jyothi, Gruha Lakshmi, and apply for income, caste, and transport licenses.",
    official_url: "https://sevasindhu.karnataka.gov.in/",
    department: "Department of Electronic Delivery of Citizen Services (EDCS), Government of Karnataka",
    required_documents: [
      "Aadhaar Card",
      "Electricity Account ID (for Gruha Jyothi scheme)",
      "Income & Caste Certificate numbers",
      "Ration Card copy"
    ],
    guidelines: [
      "Access Seva Sindhu portal.",
      "Click on 'New User Register Here' using your Aadhaar details.",
      "Log in using email/mobile and verify with OTP.",
      "Search for target state schemes (e.g., 'Gruha Jyothi Scheme' or 'Revenue Department Certificates').",
      "Fill in the applicant details, select regional zones, and verify bank details.",
      "Upload scanned copies of Aadhaar, Ration Card, and photo.",
      "Submit and note down the GSC application transaction number.",
      "Track status online. Approved schemes are instantly synced with DBT channels."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["seva sindhu", "karnataka portal", "gruha jyothi", "karnataka certificates", "સેવા સિંધુ", "सेवा सिंधु"]
  },
  {
    id: "serviceonline-bihar",
    title: "ServicePlus RTPS Bihar Portal",
    category: "State Portals & Welfare",
    description: "Official Bihar Government Right to Public Services (RTPS) portal to apply online for residential, income, caste, and character certificates.",
    official_url: "https://serviceonline.bihar.gov.in/",
    department: "Department of Information Technology, Government of Bihar",
    required_documents: [
      "Aadhaar Card",
      "Self-Declaration Form",
      "Passport-sized photograph",
      "Landholding papers (for caste/residency confirmations)"
    ],
    guidelines: [
      "Visit the ServicePlus Bihar portal.",
      "Click on 'Register Yourself' on the top-right menu.",
      "Fill registration form and verify OTP.",
      "Log in and go to 'Apply for Services' > 'View all available services'.",
      "Select desired certificate level (e.g., 'Issuance of Income Certificate at CO Level').",
      "Fill in personal details, parents names, and address.",
      "Upload scanned Aadhaar as identification document.",
      "Submit the application and note the RTPS reference number.",
      "Download the digitally signed certificate from the portal once approved."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["serviceplus bihar", "rtps bihar", "bihar certificate", "bihar portal", "आरटीपीएस बिहार", "આરટીપીએસ બિહાર"]
  },
  {
    id: "ncs-jobseeker",
    title: "National Career Service (NCS) Job Portal",
    category: "Recruitment & Jobs",
    description: "Official Ministry of Labour portal to register as a jobseeker, search national job openings, apply for civil careers, or join training programs.",
    official_url: "https://www.ncs.gov.in/",
    department: "Ministry of Labour and Employment, Government of India",
    required_documents: [
      "Valid Identity Proof (Aadhaar Card, PAN Card, Driving License, or Voter ID)",
      "Educational qualification certificates",
      "Resume/CV (optional)",
      "Experience certificates (if applicable)"
    ],
    guidelines: [
      "Go to the National Career Service portal.",
      "Click on 'Register' on the top-right corner of the homepage.",
      "Select 'Jobseeker' from the Register As dropdown list.",
      "Verify your identity by entering your Aadhaar/PAN details.",
      "Fill in name, DOB, mobile, email, and educational achievements.",
      "Provide details of skills, hobbies, and past work experiences.",
      "Submit to generate a unique 14-digit NCS ID and digital Jobseeker Card.",
      "Log in and browse private and public sector jobs to apply directly."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["ncs", "national career service", "job portal", "government recruitment", "unemployment", "करियर", "જોબ પોર્ટલ"]
  },
  {
    id: "ssc-recruitment",
    title: "Staff Selection Commission (SSC) Registration Portal",
    category: "Recruitment & Jobs",
    description: "Official Staff Selection Commission portal to register for national government recruitment exams (CGL, CHSL, MTS, GD Constable).",
    official_url: "https://ssc.gov.in/",
    department: "Staff Selection Commission (SSC), Government of India",
    required_documents: [
      "Valid Mobile Number and Email ID",
      "Aadhaar Card or other Photo ID proof",
      "Class 10 and 12 roll number, passing year, and board details",
      "High-quality scanned Passport-sized Photograph & Signature"
    ],
    guidelines: [
      "Visit the SSC Official Portal.",
      "Click on 'Register Now' under the Login panel.",
      "Complete 'Basic Details' including Aadhaar number, name, DOB, and parents names.",
      "Verify details with OTP sent to mobile and email.",
      "Log in with your registration number and password.",
      "Complete 'Additional Contact Details' and 'Declaration' to finish OTR (One-Time Registration).",
      "Go to the dashboard, select active exams (e.g. SSC CGL), and click 'Apply'.",
      "Select exam center preferences, upload scanned photo & signature, pay the ₹100 exam fee online (exempt for women/SC/ST), and submit."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["ssc", "staff selection", "ssc cgl", "chsl", "mts", "ssc job", "कर्मचारी चयन", "એસએસસી"]
  },
  {
    id: "rrb-recruitment",
    title: "Railway Recruitment Board (RRB Apply) Portal",
    category: "Recruitment & Jobs",
    description: "Unified Indian Railways Recruitment portal to apply for non-technical popular categories (NTPC), Group D, ALP, and technician jobs.",
    official_url: "https://www.rrbcdg.gov.in/",
    department: "Railway Recruitment Board (RRB), Ministry of Railways, Government of India",
    required_documents: [
      "Scanned Photograph with white background",
      "Scanned Signature copy",
      "SC/ST Certificate (for free travel pass eligibility)",
      "Educational qualification details (ITI/Diploma/Degrees)"
    ],
    guidelines: [
      "Access the central RRB Recruitment Portal.",
      "Click on 'Create an Account' to complete the One-Time Registration.",
      "Enter country, name, DOB, Aadhaar details, mobile number, and email.",
      "Verify registration with OTP to get login credentials.",
      "Log in, click on 'Apply' for the targeted recruitment notification.",
      "Complete registration details (religion, community, educational credentials).",
      "Upload photo, signature, and SC/ST certificates (if applicable).",
      "Pay the examination fee online (refunded partially after appearing for the exam).",
      "Submit and note down the RRB registration number."
    ],
    languages: ["en-IN", "hi-IN", "gu-IN", "mr-IN", "bn-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "pa-IN", "or-IN", "ur-IN"],
    keywords: ["rrb", "rly recruitment", "rrb ntpc", "railway exam", "rrb apply", "रेलवे भर्ती", "રેલવે ભરતી"]
  }
];
