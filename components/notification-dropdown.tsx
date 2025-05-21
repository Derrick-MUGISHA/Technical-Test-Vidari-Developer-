"use client"

import { ComponentProps, useState } from "react"
import { Bell } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function NotificationDropdown({ className }: ComponentProps<"div">) {
  const [notificationCount, setNotificationCount] = useState(3)

  const notifications = [
    {
      id: 1,
      title: "Payment Successful",
      description: "Your airtime purchase of $20 was successful",
      time: "Just now",
      isNew: true,
    },
    {
      id: 2,
      title: "New Gift Card Offer",
      description: "Get 10% off on Amazon gift cards today!",
      time: "2 hours ago",
      isNew: true,
    },
    {
      id: 3,
      title: "Account Update",
      description: "Your profile information has been updated",
      time: "Yesterday",
      isNew: true,
    },
  ]

  const markAllAsRead = () => {
    setNotificationCount(0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-[#41BC3F] hover:bg-[#e6f4ea]">
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 bg-[#D86411] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 border-[#41BC3F]">
        <DropdownMenuLabel className="flex items-center justify-between px-3 py-2">
          <span className="text-[#41BC3F]">Notifications</span>
          {notificationCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead} 
              className="text-xs h-7 px-2 text-[#41BC3F] hover:bg-[#e6f4ea]"
            >
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#41BC3F]" />
        {notifications.length > 0 ? (
          <>
            {notifications.map((notification) => (
              <DropdownMenuItem 
                key={notification.id} 
                className="flex flex-col items-start p-3 cursor-pointer hover:bg-[#e6f4ea] focus:bg-[#e6f4ea]"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="font-medium flex items-center text-gray-800">
                    {notification.title}
                    {notification.isNew && notificationCount > 0 && (
                      <span className="ml-2 h-2 w-2 bg-[#D86411] rounded-full"></span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="bg-[#41BC3F]" />
            <DropdownMenuItem className="justify-center text-[#41BC3F] font-medium hover:bg-[#e6f4ea]">
              View all notifications
            </DropdownMenuItem>
          </>
        ) : (
          <div className="py-6 text-center text-gray-500">No new notifications</div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}