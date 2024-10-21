#include <stdio.h>

int main() {
    int num, x;
    scanf("%d %d", &num, &x);

    int arr[num];

    for (int i = 0; i < num; i++) {
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < num; i++) {
        if (arr[i] < x) {
            printf("%d ", arr[i]);
        }
    }
    return 0;
}
