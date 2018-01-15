import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.List;
/**
 * Write a description of class MyWorld here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class MyWorld extends World
{

    /**
     * Constructor for objects of class MyWorld.
     * 
     */
    Score score = new Score();
    public Score getScore()
    {
        return score;
    }
    public MyWorld()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(1024, 550, 1,false); 
        addObject(score,(int)(getWidth()-100),(int)(getHeight()-500));
        addObject(new Rocket(),(int)(0.5*getWidth()),(int)(0.5*getHeight()));
        
    }
    public void addAsteroids()
    {
        //Rocket rocket = getObjects(Rocket.class);
        
        for(int i=0;i<5;i++)
        {
            int x = Greenfoot.getRandomNumber(getWidth()-1);
            int y = Greenfoot.getRandomNumber(getHeight()-1);
            Actor asteroid = new Asteroid();
            addObject(asteroid,x,y);
        }
    }
    
    public void act()
    {
        List objectslookingfor = getObjects(Asteroid.class);
        if (objectslookingfor.size() == 0)
        {
            addAsteroids();
        }
    }
}
