export interface SidebarItem {
  label: string
  section: string
}

export interface MypageSidebarState {
  sidebarList: SidebarItem[]
  currentSection: string
  setCurrentSection: (section: string) => void
}
