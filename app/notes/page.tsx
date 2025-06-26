import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: about } = await supabase.from('about').select()

  return <pre>{JSON.stringify(about, null, 2)}</pre>
}