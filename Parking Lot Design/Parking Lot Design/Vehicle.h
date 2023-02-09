//
//  Vehicle.h
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/6/23.
//

#ifndef Vehicle_h
#define Vehicle_h
#include <string>
#include "ParkingTicket.h"
using namespace std;

class Vehicle {
private:
    string licenseNo;
public:
    void virtual assignTicket(ParkingTicket ticket) = 0;
};

class Car : public Vehicle {
public: void assignTicket(ParkingTicket ticket) {
        // TODO
    }
};

class Van : public Vehicle {
public: void assignTicket(ParkingTicket ticket) {
        // TODO
    }
};

class Truck : public Vehicle {
public: void assignTicket(ParkingTicket ticket) {
        // TODO
    }
};

class MotorCycle : public Vehicle {
public: void assignTicket(ParkingTicket ticket) {
        // TODO
    }
};

#endif /* Vehicle_h */
