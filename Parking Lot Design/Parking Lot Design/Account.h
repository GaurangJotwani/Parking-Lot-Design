//
//  Account.h
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/6/23.
//

#ifndef Account_h
#define Account_h

#include <string>
using namespace std;


class Account {
private:
    string userName;
    string password;
    Person person;
    AccountStatus status;
public:
    virtual bool resetPassword() = 0;
};

class Admin : public Account {
public:
    bool addParkingSpot(ParkingSpot spot);
    
    bool addDisplayBoard(DisplayBoard displayBoard);
    
    bool addEntrance(Entrance entrance);
    
    bool addExit(Exit exit);
    
    bool resetPassword() {
        //TODO
    }
}

class ParkingAttendant : public Account {
public:
    bool processTicket(string ticketNumber);
    
    bool resetPassword() {
        // TODO
    }
}


#endif /* Account_h */
