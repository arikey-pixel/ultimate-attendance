// SupabaseService.js
import React, { useState } from "react";
import { SUPABASE_KEY } from "../environments";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://odqdxoqpggmvwhtfcdlg.supabase.co";
const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// This function will sign in the user
export async function signInWithEmailAndPassword(email, password) {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      throw new Error(error.message);
    }

    // Handle successful login if needed
    return user;
  } catch (error) {
    throw new Error(error.message || "An error occurred during sign-in");
  }
}

  


