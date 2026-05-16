
-- Remove a trava de e-mail único para permitir que o mesmo cliente envie múltiplas mensagens ou entre na fila mais de uma vez.
ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_email_unique;
DROP INDEX IF EXISTS waitlist_email_unique;
