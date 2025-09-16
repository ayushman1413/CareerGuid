"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"

export function CollegeMap({ colleges, selectedCollege }) {
  // This is a placeholder for the map component
  // In a real implementation, you would integrate with Google Maps or similar
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Interactive Map View
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Map Integration</h3>
              <p className="text-muted-foreground max-w-md">
                Interactive map showing college locations would be displayed here. Integration with Google Maps or
                similar mapping service would show precise locations, directions, and nearby amenities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* College Markers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colleges.slice(0, 6).map((college) => (
          <Card key={college.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-sm">{college.name}</h4>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs">{college.rating}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {college.location}, {college.state}
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  ₹{college.fees.toLocaleString()}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {college.type}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {colleges.length > 6 && (
        <div className="text-center text-sm text-muted-foreground">
          And {colleges.length - 6} more colleges in this area...
        </div>
      )}
    </div>
  )
}
