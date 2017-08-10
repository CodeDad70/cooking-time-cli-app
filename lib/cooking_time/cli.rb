class CookingTime::CLI

  def welcome
    puts "It's Cooking Time !"
    menu
    navigation
    goodbye
  end

  def menu 
    puts <<-DOC
     
     How much time have you got ?

     1. NO time - feed me now !!! (2 min.)
     2. I'm hangry - keep it simple (5 min.)
     3. Sooner than later please (10 min.)
     4. Let's make it fast - but not an emergency (15 min.)
     5. Let's make something nice (20 min.)
     6. Let's make something fancy pants (30 min.)
     7. I have company and I need to impress (45 min.)

     DOC
  end


  def navigation 



end