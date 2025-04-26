import type React from "react"

export const GmailIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M22.288 5.649L12 13.201 1.712 5.649A1.957 1.957 0 0 1 2.998 5h18.004c.504 0 .962.193 1.286.649z" />
    <path d="M23 7.353V17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7.353l10.5 7.727c.169.124.403.124.572 0L23 7.353z" />
  </svg>
)

export const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.981 9.981 0 0 0 4.774 1.216h.004c5.505 0 9.989-4.478 9.99-9.985 0-2.669-1.037-5.176-2.922-7.06A9.91 9.91 0 0 0 12.012 2zm-3.97 5.267c.192 0 .396 0 .57.005.217.003.456.02.662.506.246.583.78 2.06.85 2.206.07.147.12.319.018.515-.101.195-.152.317-.299.487-.146.17-.31.38-.443.51-.146.147-.297.307-.128.6.17.294.755 1.252 1.623 2.032 1.09.975 2.01 1.282 2.297 1.425.288.144.456.12.625-.073.17-.192.719-.837.91-1.124.189-.286.379-.239.637-.144.259.096 1.648.776 1.93.917.282.14.47.21.54.327.07.117.07.67-.165 1.316-.236.646-1.389 1.27-1.905 1.312-.516.044-1 .202-3.36-.699-2.853-1.088-4.723-3.912-4.864-4.088-.14-.177-1.139-1.5-1.139-2.863 0-1.363.68-2.037.945-2.333.264-.297.576-.372.77-.372z" />
  </svg>
)

export const CalendlyIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
)
