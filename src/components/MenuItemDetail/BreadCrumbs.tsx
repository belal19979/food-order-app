"use client";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export function BreadCrumbs({ name }: { name: string }) {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link component={NextLink} href="/" underline="hover" color="inherit">
        Home
      </Link>
      <Link component={NextLink} href="/menu" underline="hover" color="inherit">
        Menu
      </Link>
      <Typography color="primary">{name}</Typography>
    </Breadcrumbs>
  );
}
