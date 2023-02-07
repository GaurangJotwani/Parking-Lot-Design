//
//  Enums.hpp
//  Parking Lot Design
//
//  Created by Gaurang Jotwani on 2/6/23.
//

#ifndef Enums_hpp
#define Enums_hpp

#include <stdio.h>

enum PaymentStatus {
    COMPLETED,
    FAILED,
    PENDING,
    UNPAID,
    REFUNDED
};

enum AccountStatus {
    ACTIVE,
    CLOSED,
    CANCELED,
    BLACKLISTED,
    NONE
};

#endif /* Enums_hpp */
