declare global {
    interface TeamMember {
      name: string
      role: string
      photoUrl: string
      email?: string
      linkedin?: string
    }

    interface ProjectLogo {
      name: string
      logo: string
      link: string
    }
  }
  
  export {}
  