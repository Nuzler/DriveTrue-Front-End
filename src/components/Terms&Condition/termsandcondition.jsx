import React from 'react'

const termsandcondition = () => {
  return (
  <div className='mt-20 pl-3 pr-3'>
      <h1 className='font-Josefin-Sans font-bold text-2xl mb-4'>Terms and Conditions</h1>
      <p className='mb-6'>
        Welcome to Travelers Cafe. These Terms and Conditions govern your use of our website and the purchase and sale of products from our platform.
        By accessing and using our website, you agree to comply with these terms. Please read them carefully before proceeding with any transactions.
      </p>

      {/* Use of the Website */}
      <div className='pt-4'>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Use of the Website</h2>
        <ul className='list-disc pl-5'>
          <li>You must be at least 18 years old to use our website or make purchases.</li>
          <li>You agree to provide accurate and current information during the registration and checkout process.</li>
          <li>You may not use our website for any unlawful or unauthorized purposes.</li>
        </ul>
      </div>

      {/* Product Information and Pricing */}
      <div className='pt-7'>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Product Information and Pricing</h2>
        <ul className='list-disc pl-5'>
          <li>We strive to provide accurate product descriptions, images, and pricing information. However, we do not guarantee the accuracy or completeness of such information.</li>
          <li>Prices are subject to change without notice. Any promotions or discounts are valid for a limited time and may be subject to additional terms and conditions.</li>
        </ul>
      </div>

      {/* Orders and Payments */}
      <div className='pt-7'>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Orders and Payments</h2>
        <ul className='list-disc pl-5'>
          <li>By placing an order on our website, you are making an offer to purchase the selected products.</li>
          <li>We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.</li>
          <li>You agree to provide valid and up-to-date payment information and authorize us to charge the total order amount, including applicable taxes and shipping fees, to your chosen payment method.</li>
          <li>We use trusted third-party payment processors to handle your payment information securely. We do not store or have access to your full payment details.</li>
        </ul>
      </div>


      {/* Returns and Refunds */}
      <div className='pt-7'>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Refunds Policy</h2>
        <h2 className='font-Josefin-Sans font-bold text-md'>No Refunds</h2>
        <ul className='list-disc pl-5'>
          <li>All food items are made to order and therefore cannot be returned or refunded.</li>
          <li>Once an order is confirmed and preparation begins, cancellations and refunds are not possible.</li>
        </ul>
        <h2 className='font-Josefin-Sans font-bold text-md pt-2'>Order Issues</h2>
        <p>If you experience any of the following issues, please contact us immediately at 0362030500 or speak to our staff:</p>
        <ul className='list-disc pl-5'>
          <li>You received the wrong item.</li>
          <li>An item is missing from your order.</li>
          <li>Your food is damaged or spoiled upon arrival.</li>
        </ul>
        <p>We may offer a replacement or alternative resolution at our discretion, depending on the situation and available evidence (e.g., photos, order confirmation).</p>
      </div>

         

      {/* Intellectual Property */}
      <div className='pt-7'>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Intellectual Property</h2>
        <ul className='list-disc pl-5'>
          <li>All content and materials on our website, including but not limited to text, images, logos, and graphics, are protected by intellectual property rights and are the property of Travelers Cafe or its licensors.</li>
          <li>You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.</li>
        </ul>
      </div>

      {/* Limitation of Liability */}
      <div className='pt-7'>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Limitation of Liability</h2>
        <ul className='list-disc pl-5'>
          <li>In no event shall Travelers Cafe, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or the purchase and use of our products.</li>
          <li>We make no warranties or representations, express or implied, regarding the quality, accuracy, or suitability of the products offered on our website.</li>
        </ul>
      </div>

      {/* Amendments and Termination */}
      <div className='pt-7 '>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Amendments and Termination</h2>
        <ul className='list-disc pl-5'>
          <li>We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.</li>
        </ul>
      </div>

      {/* Returns and Refunds */}
      <div className='pt-7 pb-10'>
        <h2 className='font-Josefin-Sans font-bold text-lg'>Privacy Policy</h2>
        <p>At travelerscafe.lk, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or make a purchase on our website. By using our website, you consent to the practices described in this policy.</p>
        <h2 className='font-Josefin-Sans font-bold text-md'>Information We Collect</h2>
        <p>When you visit our website, we may collect certain information about you, including:</p>
        <ul className='list-disc pl-5'>
          <li>Personal identification information (such as your name, email address, and phone number) provided voluntarily by you during the registration or checkout process.</li>
          <li>Payment and billing information necessary to process your orders, including credit card details, which are securely handled by trusted third-party payment processors.</li>
          <li>rowsing information, such as your IP address, browser type, and device information, collected automatically using cookies and similar technologies.</li>
        </ul>

        <h2 className='font-Josefin-Sans font-bold text-md pt-2'>Use of Information</h2>
        <p>We may use the collected information for the following purposes:</p>
        <ul className='list-disc pl-5'>
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you regarding your purchases, provide customer support, and respond to inquiries or requests.</li>
          <li>To personalize your shopping experience and present relevant product recommendations and promotions.</li>
          <li>To improve our website, products, and services based on your feedback and browsing patterns.</li>
          <li>To detect and prevent fraud, unauthorized activities, and abuse of our website.</li>
        </ul>

        <h2 className='font-Josefin-Sans font-bold text-md pt-2'>Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        
        <h2 className='font-Josefin-Sans font-bold text-md pt-2'>Changes to the Privacy Policy</h2>
        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised "last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.</p>

      </div>
    </div>
  )
}

export default termsandcondition
