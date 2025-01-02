export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Added mt-16 for default navbar height and pt-8 for breathing room */}
      <div className="container mx-auto px-4 py-12 md:py-24 mt-16 pt-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center md:text-left">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-muted-foreground">
            {/* Rest of the content remains the same... */}
            <p className="text-base md:text-lg leading-relaxed">
              At <span className="text-white font-semibold">AIVOLVE</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services. By accessing or using our website and services, you agree to the collection and use of information as described in this policy.
            </p>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">1.1 Personal Information</h3>
                  <p className="mb-4">When you create an account, use our services, or contact us, we may collect the following personal information:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Payment Information</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Organization Name (if applicable)</li>
                      <li>IP Address</li>
                      <li>Voluntarily provided information</li>
                    </ul>
                  </div>
                </div>

                {/* Usage Data Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">1.2 Usage Data</h3>
                  <p className="mb-4">We collect data on how you use our services, which may include:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Device information (e.g., browser type, operating system)</li>
                    <li>Log data (e.g., IP address, timestamps, pages visited)</li>
                    <li>Interaction data (e.g., how you interact with our website, services, or content)</li>
                  </ul>
                </div>

                {/* Cookies Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">1.3 Cookies and Tracking Technologies</h3>
                  <p>
                    We use cookies, web beacons, and similar technologies to track your activity on our website and services. These technologies help us enhance your experience and collect usage data for analysis. You can control cookie settings through your browser.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
              <p>We may use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-3">
                <li>To provide and improve our services: Personalizing your experience, troubleshooting, and enhancing our products</li>
                <li>To process transactions: Managing subscriptions, payments, and providing customer support</li>
                <li>To communicate with you: Sending updates, notifications, and support communications</li>
                <li>To comply with legal obligations: Meeting regulatory and legal requirements</li>
                <li>To analyze and improve our services: Analyzing usage patterns to enhance performance and functionality</li>
              </ul>
            </section>

            {/* Information Sharing Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">3. How We Share Your Information</h2>
              <p>We respect your privacy and will not sell or rent your personal information to third parties. However, we may share your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-3">
                <li>Service Providers: We may share data with trusted third-party providers who assist in operating our website or services</li>
                <li>Legal Requirements: If required by law or in response to legal processes</li>
                <li>Business Transfers: In the event of a merger, acquisition, or sale of assets</li>
                <li>With your consent: We may share information if you provide explicit consent for such sharing</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <ul className="list-none space-y-2">
                <li className="text-white">contact@aivolve.in</li>
                <li className="text-white">Lucknow, India</li>
              </ul>
            </section>

            {/* Closing Statement */}
            <p className="text-center text-base md:text-lg pt-8">
              Thank you for trusting <span className="text-white font-semibold">AIVOLVE</span> with your personal data.
              <br />
              We are committed to safeguarding your privacy and ensuring a positive experience with our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;