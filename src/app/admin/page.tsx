import { redirect } from 'next/navigation'

export default function AdminPage() {
  // Redirect ke dashboard admin
  redirect('/admin/dashboard')
}