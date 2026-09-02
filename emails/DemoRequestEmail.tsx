import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface DemoRequestEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  accountType: string;
  estimatedCapital: string;
  message?: string;
}

export default function DemoRequestEmail({
  firstName,
  lastName,
  email,
  phone,
  company,
  accountType,
  estimatedCapital,
  message,
}: DemoRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New demo request from {firstName} {lastName} at {company}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Demo Request</Heading>
          
          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{firstName} {lastName}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Company:</Text>
            <Text style={value}>{company}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Account Type:</Text>
            <Text style={value}>{accountType}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Estimated Capital:</Text>
            <Text style={value}>{estimatedCapital}</Text>
          </Section>

          {message && (
            <>
              <Hr style={hr} />
              <Section style={section}>
                <Text style={label}>Additional Message:</Text>
                <Text style={messageText}>{message}</Text>
              </Section>
            </>
          )}
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#1e3932",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  padding: "0 48px",
};

const section = {
  padding: "0 48px",
  marginBottom: "16px",
};

const label = {
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  marginBottom: "4px",
};

const value = {
  color: "#1e3932",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
};

const messageText = {
  color: "#1e3932",
  fontSize: "16px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "32px 48px",
};
