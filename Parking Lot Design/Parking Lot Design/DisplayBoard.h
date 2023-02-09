//
//  DisplayBoard.h
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/9/23.
//

#ifndef DisplayBoard_h
#define DisplayBoard_h
#include <string>
#include "ParkingSpot.hpp"

class DisplayBoard {
private:
    int id;
    Handicapped handicappedSpot;
    Compact compactSpot;
    Large largeSpot;
    MotorCycle motorCycleSpot;
    
public:
    void showFreeSlot();
};

class ParkingRate {
private:
    double hours;
    double rate;

public:
    void calculate();
};

class Entrance {
private:
    int id;
    ParkingTicket ticket;

public:
    ParkingTicket getTicket(ParkingTicket ticket);
}


class Exit {
private:
    int id;
    ParkingTicket ticket;

public:
    void validateTicket(ParkingTicket ticket);
}


#endif /* DisplayBoard_h */
