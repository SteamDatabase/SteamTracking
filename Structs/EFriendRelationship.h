typedef enum EFriendRelationship
{
    k_EFriendRelationshipNone = 0, // None
    k_EFriendRelationshipBlocked, // Blocked
    k_EFriendRelationshipPendingInvitee, // Pending (Invitee)
    k_EFriendRelationshipFriend, // Friend
    k_EFriendRelationshipPendingInviter, // Pending (Inviter)
    k_EFriendRelationshipIgnored, // Ignored
    k_EFriendRelationshipIgnoredFriend, // IgnoredFriend
    k_EFriendRelationshipSuggestedFriend, // SuggestedFriend
} EFriendRelationship;
