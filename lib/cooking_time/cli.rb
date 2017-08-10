class CookingTime::CLI

  def welcome
    puts "It's Cooking Time !"
    menu
    # navigation
    # goodbye
  end

  def menu 
    puts <<-DOC
     
     How much time have you got ?

     1. NO time - feed me now !!! (0 min.)
     2. I have about 5 minutes keep it simple (2- 5 min.)
     3. I'm not in a huge rush - but I don't have all night (10-15 min.)
     4. Let's make something fancy pants (20+ min.)?
     DOC
  end



end