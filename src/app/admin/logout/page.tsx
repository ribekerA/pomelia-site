"use client";
import { useEffect } from "react";
export default function LogoutPage() {
  useEffect(() => {
    document.cookie =
      "pomelia_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    window.location.href = "/admin/login";
  }, []);
  return null;
}
