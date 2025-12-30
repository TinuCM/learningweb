import java.util.Scanner;
class DigitAnalyzer{
    int countDigit(int num , int d){
        int a=num;
        int b=d;
        // System.out.println(a);
        // System.out.println(b);
        int count=0;
        while(a>0){
            if(a%10==b){
                count+=1;
            }
            a=a/10;
        }
        return count;
        

    }
}
public class mainn{
    public static void main(String args[]){
        DigitAnalyzer da = new DigitAnalyzer();
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the number");
        int num=sc.nextInt();
        System.out.println("enter the digit");
        int d=sc.nextInt();
        int m;
        m=da.countDigit(num,d);
        System.out.println("the count of "+d+ " in " +num + " is " + m);

    }
}