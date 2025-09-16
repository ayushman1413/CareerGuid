"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

export function CollegeFilters({ filters, onFilterChange }) {
  const handleInputChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value })
  }

  const clearFilters = () => {
    onFilterChange({
      search: "",
      state: "",
      stream: "",
      type: "",
      fees: "",
      hostel: false,
    })
  }

  const states = [
    "Delhi",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Uttar Pradesh",
    "West Bengal",
    "Gujarat",
    "Rajasthan",
    "Andhra Pradesh",
    "Kerala",
  ]

  const streams = [
    "Engineering",
    "Medical",
    "Arts",
    "Science",
    "Commerce",
    "Law",
    "Management",
    "Agriculture",
    "Pharmacy",
    "Architecture",
  ]

  const types = ["Government", "Government Aided", "Central University", "State University"]

  const feesRanges = [
    { label: "Under ₹50,000", value: "0-50000" },
    { label: "₹50,000 - ₹1,00,000", value: "50000-100000" },
    { label: "₹1,00,000 - ₹2,00,000", value: "100000-200000" },
    { label: "Above ₹2,00,000", value: "200000-1000000" },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="w-4 h-4 mr-2" />
            Clear
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Colleges</Label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="College name or location..."
              value={filters.search}
              onChange={(e) => handleInputChange("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* State */}
        <div className="space-y-2">
          <Label>State</Label>
          <Select value={filters.state} onValueChange={(value) => handleInputChange("state", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stream */}
        <div className="space-y-2">
          <Label>Stream</Label>
          <Select value={filters.stream} onValueChange={(value) => handleInputChange("stream", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select stream" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Streams</SelectItem>
              {streams.map((stream) => (
                <SelectItem key={stream} value={stream}>
                  {stream}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type */}
        <div className="space-y-2">
          <Label>College Type</Label>
          <Select value={filters.type} onValueChange={(value) => handleInputChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Fees */}
        <div className="space-y-2">
          <Label>Annual Fees</Label>
          <Select value={filters.fees} onValueChange={(value) => handleInputChange("fees", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select fees range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Range</SelectItem>
              {feesRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Hostel */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hostel"
            checked={filters.hostel}
            onCheckedChange={(checked) => handleInputChange("hostel", checked)}
          />
          <Label htmlFor="hostel">Has Hostel Facility</Label>
        </div>
      </CardContent>
    </Card>
  )
}
