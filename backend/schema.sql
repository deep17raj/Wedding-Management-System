CREATE TABLE  USERS (
  USER_ID VARCHAR2(50) PRIMARY KEY,
  USERNAME VARCHAR2(20) NOT NULL,
  EMAIL VARCHAR2(50) NOT NULL UNIQUE,
  PHONE VARCHAR2(15) NOT NULL ,
  PASSWORD VARCHAR2(15) NOT NULL,
  ROLE VARCHAR2(10) CHECK (ROLE IN ('Admin', 'Couple', 'Planner')) NOT NULL,
  RELIGION VARCHAR2(10) CHECK (RELIGION IN ('Hindu', 'Muslim', 'Sikh', 'Christian'))

);
CREATE TABLE  COUPLES (
  couple_id NUMBER PRIMARY KEY,
    partner1_name VARCHAR2(20) NOT NULL,
    partner2_name VARCHAR2(20) NOT NULL,
    wedding_date DATE NOT NULL,
    religion VARCHAR2(10) CHECK (religion IN ('Hindu', 'Muslim', 'Sikh', 'Christian')),
    status VARCHAR2(10) CHECK (status IN ('Planning', 'Married'))
);
CREATE TABLE  Wedding_Events (
    event_id NUMBER PRIMARY KEY,
    couple_id NUMBER,
    event_name VARCHAR2(20) NOT NULL,
    event_date DATE NOT NULL,
    venue VARCHAR2(20) NOT NULL,
    description VARCHAR2(20),
    CONSTRAINT fk_event_couple FOREIGN KEY (couple_id) REFERENCES Couples(couple_id)
);
CREATE TABLE Guests (
    guest_id NUMBER PRIMARY KEY,
    couple_id NUMBER,
    name VARCHAR2(20) NOT NULL,
    email VARCHAR2(25) UNIQUE NOT NULL,
    phone VARCHAR2(15)  NOT NULL,
    invitation_sent NUMBER(1) CHECK (invitation_sent IN (0, 1)),
    rsvp_status VARCHAR2(10) CHECK (rsvp_status IN ('Accepted', 'Declined', 'Pending')),
    CONSTRAINT fk_guest_couple FOREIGN KEY (couple_id) REFERENCES Couples(couple_id)
);
-- Create Vendors table
CREATE TABLE Vendor (
    vendor_id NUMBER PRIMARY KEY,
    name VARCHAR2(20) NOT NULL,
    service_type VARCHAR2(20) NOT NULL,
    phone VARCHAR2(15) NOT NULL,
    email VARCHAR2(255) UNIQUE NOT NULL,
    religion VARCHAR2(10) CHECK (religion IN ('Hindu', 'Muslim', 'Sikh', 'Christian', 'All')),
    price DECIMAL(10,2) NOT NULL,
    status VARCHAR2(10) CHECK (status IN ('Hired', 'Pending', 'Rejected'))
);
-- Create Budget_Expenses table
CREATE TABLE Budget_Expenses (
    expense_id NUMBER PRIMARY KEY,
    couple_id NUMBER,
    category VARCHAR2(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    paid_by VARCHAR2(100),
    dates DATE,
    CONSTRAINT fk_expense_couple FOREIGN KEY (couple_id) REFERENCES Couples(couple_id)
);
-- Create Rituals_Traditions table
CREATE TABLE Rituals_Traditions (
    ritual_id NUMBER PRIMARY KEY,
    religion VARCHAR2(10) CHECK (religion IN ('Hindu', 'Muslim', 'Sikh', 'Christian')),
    ritual_name VARCHAR2(20) NOT NULL,
    description VARCHAR2(30),
    importance_level VARCHAR2(10) CHECK (importance_level IN ('Essential', 'Optional'))
);
COMMIT;