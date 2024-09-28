import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { images } from '@/constants';
import { createUser } from '@/lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    user_name: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async() => {
    if(!form.email || !form.password || !form.user_name){
      Alert.alert('Error', 'Please fill in all the fields');
    }

    setIsSubmitting(true);
    try{
      const result = await createUser(
        form.email,
        form.password,
        form.user_name
      );

      router.replace('/home')
    }catch(error){
      if (error instanceof Error) {
        // TypeScript now knows that error has a `message` property
        Alert.alert('Error', error.message);
      } else {
        // Handle any other unknown errors
        Alert.alert('Error', 'An unknown error occurred');
      }
    }finally{
      setIsSubmitting(false);
    }
    
  };

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Sign Up to aora
          </Text>
          <FormField
            title="Username"
            value={form.user_name}
            handleChangeText={(e) => setForm({ ...form, user_name: e})}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType='email-address'
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
          title='Sign Up'
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Have an account already?
              </Text>
              <Link href='/sign-in'
              className='text-lg font-psemibold text-secondary'>
                Sign In
              </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})