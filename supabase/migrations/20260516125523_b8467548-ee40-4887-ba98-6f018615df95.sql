
DROP POLICY "Anyone can join the waitlist" ON public.waitlist;

CREATE POLICY "Anyone can join the waitlist"
  ON public.waitlist FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 2 AND 120
    AND length(email) BETWEEN 5 AND 200
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (phone IS NULL OR length(phone) <= 40)
    AND (company IS NULL OR length(company) <= 200)
    AND (city IS NULL OR length(city) <= 120)
    AND (segment IS NULL OR length(segment) <= 60)
    AND (message IS NULL OR length(message) <= 1000)
  );
