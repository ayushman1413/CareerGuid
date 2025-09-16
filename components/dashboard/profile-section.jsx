"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Edit, Save, X, Plus } from "lucide-react"

export function ProfileSection({ user, onUserUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    grade: user.grade || "",
    school: user.school || "",
    location: user.location || "",
    interests: user.interests || [],
    skills: user.skills || [],
    careerGoals: user.careerGoals || "",
    bio: user.bio || "",
  })
  const [newInterest, setNewInterest] = useState("")
  const [newSkill, setNewSkill] = useState("")

  const handleSave = () => {
    const updatedUser = { ...user, ...formData }
    localStorage.setItem("user", JSON.stringify(updatedUser))
    onUserUpdate(updatedUser)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      name: user.name || "",
      email: user.email || "",
      grade: user.grade || "",
      school: user.school || "",
      location: user.location || "",
      interests: user.interests || [],
      skills: user.skills || [],
      careerGoals: user.careerGoals || "",
      bio: user.bio || "",
    })
    setIsEditing(false)
  }

  const addInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData({
        ...formData,
        interests: [...formData.interests, newInterest.trim()],
      })
      setNewInterest("")
    }
  }

  const removeInterest = (interest) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((i) => i !== interest),
    })
  }

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      })
      setNewSkill("")
    }
  }

  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    })
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">{initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription className="text-base">
                  {user.role} • {user.grade ? `Class ${user.grade}` : "Student"}
                </CardDescription>
              </div>
            </div>
            <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "outline" : "default"}>
              {isEditing ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Your personal and academic details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="grade">Grade/Class</Label>
                <Select
                  value={formData.grade}
                  onValueChange={(value) => setFormData({ ...formData, grade: value })}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">Class 9</SelectItem>
                    <SelectItem value="10">Class 10</SelectItem>
                    <SelectItem value="11">Class 11</SelectItem>
                    <SelectItem value="12">Class 12</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  disabled={!isEditing}
                  placeholder="City, State"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="school">School/Institution</Label>
              <Input
                id="school"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                disabled={!isEditing}
                placeholder="Your current school"
              />
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                disabled={!isEditing}
                placeholder="Tell us about yourself..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Interests & Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Interests & Skills</CardTitle>
            <CardDescription>What you're passionate about and good at</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Interests */}
            <div>
              <Label>Interests</Label>
              <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {formData.interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {interest}
                    {isEditing && <X className="w-3 h-3 cursor-pointer" onClick={() => removeInterest(interest)} />}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Input
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add an interest"
                    onKeyPress={(e) => e.key === "Enter" && addInterest()}
                  />
                  <Button size="sm" onClick={addInterest}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Skills */}
            <div>
              <Label>Skills</Label>
              <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {formData.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    {skill}
                    {isEditing && <X className="w-3 h-3 cursor-pointer" onClick={() => removeSkill(skill)} />}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button size="sm" onClick={addSkill}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Career Goals */}
            <div>
              <Label htmlFor="careerGoals">Career Goals</Label>
              <Textarea
                id="careerGoals"
                value={formData.careerGoals}
                onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                disabled={!isEditing}
                placeholder="What are your career aspirations?"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  )
}
