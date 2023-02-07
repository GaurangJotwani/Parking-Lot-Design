//
//  ParkingSpot.hpp
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/6/23.
//

#ifndef ParkingSpot_hpp
#define ParkingSpot_hpp

#include <stdio.h>
#include <string>

#include "Vehicle.h"

using namespace std;

class ParkingSpot {
private:
    int id;
    bool isFree;
    Vehicle vehicle;

public:
    bool getIsFree();
    virtual bool assignVehicle(Vehicle vehicle) = 0;
    bool removeVehicle();
};


class Handicapped: public ParkingSpot {
public:
    bool assignVehicle(Vehicle vehicle) {
        // TODO
    }
};

class Compact: public ParkingSpot {
public:
    bool assignVehicle(Vehicle vehicle) {
        // TODO
    }
};

class Large: public ParkingSpot {
public:
    bool assignVehicle(Vehicle vehicle) {
        // TODO
    }
};

class Motorcycle: public ParkingSpot {
public:
    bool assignVehicle(Vehicle vehicle) {
        // TODO
    }
};
#endif /* ParkingSpot_hpp */
