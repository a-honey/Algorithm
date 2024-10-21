#include <stdio.h>

int main()
{
    int n, target, count = 0;
    int arr[100];

    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    scanf("%d", &target);
    
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            count++;
        }
    }
    printf("%d\n", count);
    return 0;
}
