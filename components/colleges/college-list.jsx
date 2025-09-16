"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Users, Home, ExternalLink, Phone, Mail } from "lucide-react"

export function CollegeList({ colleges, onSelectCollege }) {
  if (colleges.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-4">No colleges found matching your criteria</div>
        <p className="text-sm text-muted-foreground">Try adjusting your filters to see more results</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {colleges.map((college) => (
        <Card key={college.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <MapPin className="w-4 h-4" />
                  {college.location}, {college.state}
                </CardDescription>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold">{college.rating}</span>
                  <span className="text-sm text-muted-foreground">({college.reviews} reviews)</span>
                </div>
                <Badge variant={college.type === "Government" ? "default" : "secondary"}>{college.type}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Annual Fees</div>
                <div className="text-lg font-semibold">₹{college.fees.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Students</div>
                <div className="text-lg font-semibold flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {college.students.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Hostel</div>
                <div className="text-lg font-semibold flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  {college.hasHostel ? "Available" : "Not Available"}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-medium text-muted-foreground mb-2">Streams Offered</div>
              <div className="flex flex-wrap gap-2">
                {college.streams.map((stream) => (
                  <Badge key={stream} variant="outline">
                    {stream}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-medium text-muted-foreground mb-2">Key Features</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {college.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Brochure
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
