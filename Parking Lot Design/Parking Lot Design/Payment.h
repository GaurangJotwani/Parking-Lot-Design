//
//  Payment.h
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/9/23.
//

#ifndef Payment_h
#define Payment_h

class Payment {
private:
    double amount;
    PaymentStatus status;
    time_t timestamp;
    
    public virtual bool initiateTransaction() = 0;
    
};

class Cash : public Payment {
    public bool initiateTransaction() {
        //TO DO
    }
};

class CreditCard : public Payment {
    public bool initiateTransaction() {
        // TO-DO;
    }
}



#endif /* Payment_h */
