//
//  ParkingTicket.h
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/9/23.
//

#ifndef ParkingTicket_h
#define ParkingTicket_h


#endif /* ParkingTicket_h */


class ParkingTicket {
private:
    int ticketNo;
    time_t timestamp;
    time_t exit;
    double amount;
    bool status;
    
    Vehicle vehicle;
    Payment payment;
    Entrance entrance;
    Exit exitIns;
};
