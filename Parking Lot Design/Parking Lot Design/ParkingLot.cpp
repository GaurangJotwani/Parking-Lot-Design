//
//  ParkingLot.cpp
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/9/23.
//

#include "ParkingLot.hpp"
#include <string>
#include "DisplayBoard.h"
#include <map>

using namespace std;

class ParkingLot {
    
private:
    int id;
    string name;
    string address;
    ParkingRate parkingRate;
    
    map<string, Entrance> entrace;
    map<string, Exit> exit;
    
    map<string, ParkingTicket> tickets;
    
    static ParkingLot parkingLot = NULL;
    
    ParkingLot() {
        //TO-DO
    }
    
public:
    static ParkingLot getInstance(){
        if (parkingLot == NULL) {
            parkingLot = new ParkingLot;
        }
        return parkingLot;
    }
    
    bool addEntrance(Entrance entrace){}
    bool addExit(Exit exit) {}
    
    ParkingTicket getParkingTicket(Vehicle vehicle) {}
    
    bool isFull(ParkingSpot type) {}
    
};
