import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to public portfolio by default
  redirect('/portfolio');
}
