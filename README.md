# CCBS
Designed and developed a user-friendly website to reserve slots in the community center of IIT Bhubaneswar.

In this first user has to login through the IIT Bhubaneswar mail Id then it will redirect the user to a user profile page where the user can see its details and the history of bookings he has done in past.

If the user wants to create a booking slot in CC then the time and availability of its booking will depend on its role. User has three



- SuperAdmin-(The user whose priority in booking is most and the user who will confirm the bookings of others)
- Admin -(Faculty and high authority )
- Others 

And It has one admin page only for SuperAdmin where all the pending requests will be displayed and where super admin will accept or will reject the request. After rejection or confirmation user will get an email for his/her booking status and it will be updated on the user profile page also.

And In one month a user can make only two confirmed requests. For checking and deleting the other requests of that user an algorithm is applied and for choosing a time slot for booking based on different roles a different algorithm is applied.

