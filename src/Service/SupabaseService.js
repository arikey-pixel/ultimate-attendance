import React from 'react'
import { SUPABASE_KEY } from '../environments';

// require('dotenv').config();

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://odqdxoqpggmvwhtfcdlg.supabase.co'
const supabaseKey  = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// This will sign in the user when the login in button is pressed.
export async function signInWithEmailAndPassword(email, password) {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
  
      if (error) {
        console.error('Sign-in error:', error.message);
      } else {
        console.log('User signed in:', user);
      }
    } catch (error) {
      console.error('Unexpected error during sign-in:', error.message);
    }
  }
