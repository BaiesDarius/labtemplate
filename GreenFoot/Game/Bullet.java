import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Bullet here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Bullet extends Mover
{
    /**
     * Act - do whatever the Bullet wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act() 
    {
        move(10.0);
        hitDetection();
    }
    public void hitDetection()
    {
        Actor b = getOneIntersectingObject(Asteroid.class);  
        if(b != null)  
        {  
            World world = getWorld();
            MyWorld space = (MyWorld)world;
            Score score = space.getScore();
            score.addScore();
            getWorld().removeObject(b);   
            getWorld().removeObject(this);
            
        }  
    }
}
