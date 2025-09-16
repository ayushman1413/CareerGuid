"use client"

import { useState, useEffect } from "react"
import { CollegeFilters } from "@/components/colleges/college-filters"
import { CollegeList } from "@/components/colleges/college-list"
import { CollegeMap } from "@/components/colleges/college-map"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List, Map, Filter } from "lucide-react"
import { collegeData } from "@/lib/college-data"

export default function CollegesPage() {
  const [colleges, setColleges] = useState(collegeData)
  const [filteredColleges, setFilteredColleges] = useState(collegeData)
  const [filters, setFilters] = useState({
    search: "",
    state: "",
    stream: "",
    type: "",
    fees: "",
    hostel: false,
  })
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCollege, setSelectedCollege] = useState(null)

  useEffect(() => {
    let filtered = colleges

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(
        (college) =>
          college.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          college.location.toLowerCase().includes(filters.search.toLowerCase()),
      )
    }

    // Apply state filter
    if (filters.state) {
      filtered = filtered.filter((college) => college.state === filters.state)
    }

    // Apply stream filter
    if (filters.stream) {
      filtered = filtered.filter((college) => college.streams.includes(filters.stream))
    }

    // Apply type filter
    if (filters.type) {
      filtered = filtered.filter((college) => college.type === filters.type)
    }

    // Apply fees filter
    if (filters.fees) {
      const [min, max] = filters.fees.split("-").map(Number)
      filtered = filtered.filter((college) => {
        const fees = college.fees
        return fees >= min && fees <= max
      })
    }

    // Apply hostel filter
    if (filters.hostel) {
      filtered = filtered.filter((college) => college.hasHostel)
    }

    setFilteredColleges(filtered)
  }, [filters, colleges])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Find Your Perfect College</h1>
              <p className="text-muted-foreground mt-2">
                Discover government colleges across India with detailed information and filters
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <div className="text-sm text-muted-foreground">
                {filteredColleges.length} of {colleges.length} colleges
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
            <CollegeFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <List className="w-4 h-4" />
                  List View
                </TabsTrigger>
                <TabsTrigger value="map" className="flex items-center gap-2">
                  <Map className="w-4 h-4" />
                  Map View
                </TabsTrigger>
              </TabsList>

              <TabsContent value="list">
                <CollegeList colleges={filteredColleges} onSelectCollege={setSelectedCollege} />
              </TabsContent>

              <TabsContent value="map">
                <CollegeMap colleges={filteredColleges} selectedCollege={selectedCollege} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
